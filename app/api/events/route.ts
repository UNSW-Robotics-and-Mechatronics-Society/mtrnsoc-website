import { NextResponse } from "next/server";
import moment from "moment";
import { getCurrentEvents, getPastEvents } from "util/api";
import { Event, EventDetail, getSortedEvents } from "util/eventsHelpers";
import { yearDates } from "data/termDatesData";

export const dynamic = "force-dynamic";

type YearlyEvents = {
  year: number;
  events: Event[];
};

type YearlyEventsByTermRaw = {
  year: number;
  t1: EventDetail[];
  t2: EventDetail[];
  t3: EventDetail[];
};

type YearlyEventsByTerm = {
  year: number;
  t1: Event[];
  t2: Event[];
  t3: Event[];
};

export async function GET() {
  const [currentEventsRes, pastEventsRes] = await Promise.all(
    await Promise.all([getCurrentEvents(), getPastEvents()]),
  );
  const [currentEvents, err1] = currentEventsRes;
  const [pastEvents, err2] = pastEventsRes;

  if (err1 !== null || err1 === undefined) throw err1;
  if (currentEvents === null) throw new Error("Uncaught error with currentEvents API call");

  const sortedCurrentEvents = getSortedEvents(currentEvents);

  if (err2 !== null || err2 === undefined) throw err2;
  if (pastEvents === null) throw new Error("Uncaught error with pastEvents API call");

  // Get unique years from pastEvents
  const uniqueYears: Set<number> = new Set();
  pastEvents.forEach((event) => {
    const earliestDate = event.startDate;
    uniqueYears.add(moment.unix(earliestDate).year());
  });

  // Split past events into years

  /**
   * `pastEvents` sorted into groups with the same year
   */
  const eventsByYear: YearlyEvents[] = [];

  uniqueYears.forEach((year) => {
    const eventsForYear = pastEvents.filter((x) => {
      const earliestDate = x.startDate;
      return moment.unix(earliestDate).year() === year;
    });
    eventsByYear.push({ year, events: eventsForYear });
  });

  /**
   * `pastEvents` sorted by years then by UNSW terms
   */
  const eventsByYearByTerm: YearlyEventsByTermRaw[] = [];

  eventsByYear.forEach(({ year, events }) => {
    // Find the term dates
    const termDates = yearDates.find((x) => x.year === year);
    if (!termDates) throw new Error(`No term dates found for year ${year} in yearDates`);
    const { termStartDates } = termDates;

    // NOTE: Time zones used are relative to what the server uses, may be an issue
    const FORMAT = "DD/MM/YYYY";

    const t1Unix = moment(termStartDates.t1, FORMAT).unix();
    const t2Unix = moment(termStartDates.t2, FORMAT).unix();
    const t3Unix = moment(termStartDates.t3, FORMAT).unix();

    // T1 events: Start of year <= date < T2 Start
    const t1Events = events.filter((x) => {
      const earliestDate = x.startDate;
      return moment().year(year).startOf("year").unix() <= earliestDate && earliestDate < t2Unix;
    });

    // T2 events: T2 start <= date < T3 Start
    const t2Events = events.filter((x) => {
      const earliestDate = x.startDate;
      return t2Unix <= earliestDate && earliestDate < t3Unix;
    });

    // T3 events: T3 start <= date <= End of year
    const t3Events = events.filter((x) => {
      const earliestDate = x.startDate;
      return t3Unix <= earliestDate && earliestDate <= moment().year(year).endOf("year").unix();
    });

    if (t1Events.length + t2Events.length + t3Events.length !== events.length)
      throw new Error("Issue with sorting events into terms");

    // NOTE: Reverse sort past events, as oldest 'latest finishing' event should appear first
    eventsByYearByTerm.push({
      year,
      t1: t1Events.sort((x, y) => y.getOldestDate() - x.getOldestDate()).map((x) => x.toJSON()),
      t2: t2Events.sort((x, y) => y.getOldestDate() - x.getOldestDate()).map((x) => x.toJSON()),
      t3: t3Events.sort((x, y) => y.getOldestDate() - x.getOldestDate()).map((x) => x.toJSON()),
    });
  });

  eventsByYearByTerm.sort((a, b) => b.year - a.year); // Sort by decreasing year

  return NextResponse.json({
    currentEventsRaw: sortedCurrentEvents.map((x) => x.toJSON()),
    eventsByYearByTermRaw: eventsByYearByTerm,
  });
}
