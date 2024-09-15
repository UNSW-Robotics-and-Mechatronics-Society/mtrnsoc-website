import { useQuery } from "react-query";
import { EventDetail } from "util/eventsHelpers";

type YearlyEventsByTermRaw = {
  year: number;
  t1: EventDetail[];
  t2: EventDetail[];
  t3: EventDetail[];
};

type Response = {
  currentEventsRaw: EventDetail[];
  eventsByYearByTermRaw: YearlyEventsByTermRaw[];
};

// Returns a response object containing the events, otherwise throws an error
async function getEvents() {
  const res = await fetch(window.location.origin + "/api/events");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return await res.json();
}

// This hook provides a list of events with caching capabilities
export default function useEvents() {
  const query = useQuery<Response>("events", getEvents);
  return {
    currentEventsRaw: query.data?.currentEventsRaw,
    eventsByYearByTermRaw: query.data?.eventsByYearByTermRaw,
    ...query,
  };
}
