import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getCurrentEvents } from "util/api";
import { Event, EventDetail, getSortedEvents } from "util/eventsHelpers";
import useWindowDimensions from "util/useWindowDimensions";
import { Banner, ContentContainer, MetaTags, OurCurrentEvents } from "components";
import { PositionType } from "components/Banner/Banner";
import { PageInformation, homePageData } from "data/navLinksData";
import { spArcLink } from "data/socialsData";
import sponsorsData, { SponsorData } from "data/sponsorsData";
import { ProfileData, execData } from "data/teamData";
import styles from "styles/index.module.scss";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

const SectionWhoWeAre = (): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Who we are" />
        <div className={styles.WhoWeAreTextContainer}>
          <p>
            UNSW Mechatronics Society (MTRNSoc) is a student-led society that aims to promote
            Mechatronic Engineering opportunities and pathways inside the University of New South
            Wales. As the largest mechatronics-related society within the university, MTRNSoc has a
            rapidly growing membership base, already with over 1000 members.
          </p>
          <br />
          <p>
            We run workshops, projects, competitions, industry nights, and social events to engage
            students with real-world projects. These projects allow students to develop them
            professionally and technically, as well as introducing them to a community of
            like-minded individuals.
          </p>
        </div>
        <div className={styles.WhoWeAreButtonsContainer}>
          <Link legacyBehavior href="https://www.mtrnsocsumobot.com/">
            <a className="pb-5 px-5" target="_blank">
              <button className={styles.buttonStyle}>SumoBots 2023</button>
            </a>
          </Link>
          <Link
            legacyBehavior
            href="https://drive.google.com/file/d/1osLLTE31Ce_P-UxY63j-iTw4f-b-wgR1/view?usp=sharing"
          >
            <a className="pb-5 px-5" target="_blank">
              <button className={styles.buttonStyle}>View our constitution</button>
            </a>
          </Link>
          <Link legacyBehavior href="https://unsw-mtrnsoc-merch.square.site/">
            <a className="pb-5 px-5" target="_blank">
              <button className={styles.buttonStyle}>Merch Site</button>
            </a>
          </Link>
        </div>
      </div>
    </ContentContainer>
  );
};

type SectionOurEventsProps = {
  currentEvents: Event[];
};

const SectionOurEvents = ({ currentEvents }: SectionOurEventsProps): JSX.Element => {
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Our Current Events" />
        <OurCurrentEvents currentEvents={currentEvents} buttonStyle={styles.buttonStyle} />
      </div>
    </ContentContainer>
  );
};

type SectionMeetTheTeamProps = {
  featuredPersonData: ProfileData;
};

const SectionMeetTheTeam = ({ featuredPersonData }: SectionMeetTheTeamProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Meet the Team!" />
        <div className={styles.meetTeamContainer}>
          {/* Left hand side */}
          <div className="flex flex-row w-full max-md:flex-col">
            <div className={styles.featuredPersonCard}>
              <img
                src={featuredPersonData.src}
                alt={`${featuredPersonData.position} photo`}
                className={styles.execPhoto}
              />
              <div className={styles.featuredPersonCardText}>
                <div className="max-md:h-full max-md:grid max-md:place-items-center max-md:px-5">
                  <div>
                    <h1 className="text-xl font-semibold">{featuredPersonData.id}</h1>
                    <span className="text-base uppercase font-medium pt-1 text-gray-500">
                      {featuredPersonData.position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right hand side */}
            <div className={styles.featuredTextContainer}>
              <div className={styles.featuredTextBox}>
                <p className="relative">
                  <span className="z-50">
                    MTRNSoc aims to enrich the student experience while ensuring our members are job
                    ready for the industry. Our focus on encouraging members to learn, develop soft
                    skills and pursue their passions is an integral part of MTRNSoc. We endeavour to
                    develop well-rounded Mechatronic engineers with practical training and
                    knowledge, while enjoying the university experience. We hope you can be a part
                    of this too!
                  </span>
                  <img
                    src="/misc/quotes.svg"
                    alt="pog"
                    className={styles.quotesTopLeft}
                    draggable={false}
                  />
                  <img
                    src="/misc/quotes.svg"
                    alt="pog"
                    className={styles.quotesBottomRight}
                    draggable={false}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <Link legacyBehavior href="/team">
              <a>
                <button className={styles.buttonStyle}>Meet Us</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

type SponsorsSectionProps = {
  sponsors: SponsorData[];
};

const SponsorSection = ({ sponsors }: SponsorsSectionProps): JSX.Element => {
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Proudly Supported By" />
        <div className={styles.sponsorsContainer}>
          {sponsors.map((sponsor) => {
            return (
              <Link legacyBehavior href={sponsor.link} key={sponsor.alt}>
                <a target="_blank">
                  <img src={sponsor.src} alt={sponsor.alt} className={styles.sponsorLogos} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

type JoinUsSectionPops = {
  spArcLink: string;
};

const JoinUsSection = ({ spArcLink }: JoinUsSectionPops): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Join The Society" />
        <div>
          <p className="pb-10">Want to be involved? Join Us!</p>
          <Link legacyBehavior href={spArcLink}>
            <a target="_blank">
              <button className={styles.buttonStyle}>Join us on SpArc</button>
            </a>
          </Link>
        </div>
      </div>
    </ContentContainer>
  );
};

type HomePageProps = {
  currentEventsRaw: EventDetail[];
  sponsors: SponsorData[];
  featuredPersonData: ProfileData;
  spArcLink: string;
  pageData: PageInformation;
};

const Home: NextPage<HomePageProps> = ({
  currentEventsRaw,
  sponsors,
  featuredPersonData,
  spArcLink,
  pageData,
}) => {
  const { width } = useWindowDimensions();
  const [position, setPosition] = React.useState<PositionType>("bottom-left");

  React.useEffect(() => {
    // 639px is based on a set TailwindCSS breakpoint
    if (width !== null) setPosition(width <= 639 ? "center" : "bottom-left");
  }, [width]);

  const currentEvents = currentEventsRaw.map((x) => Event.eventFromEventDetails(x));
  const scrollID = "homePageScrollDiv";

  return (
    <section className="h-full">
      <MetaTags
        title={pageData.title}
        description={pageData.description}
        imgURL={pageData.bannerImageURL}
      />
      <div className={styles.mainContainer}>
        <Banner
          imgURL={pageData.bannerImageURL}
          text={pageData.bannerText}
          arrow={true}
          position={position}
          scrollToID={scrollID}
        />
        <div id={scrollID}></div>
        <SectionWhoWeAre />
        <SectionOurEvents currentEvents={currentEvents} />
        <SectionMeetTheTeam featuredPersonData={featuredPersonData} />
        <SponsorSection sponsors={sponsors} />
        <JoinUsSection spArcLink={spArcLink} />
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  // Fetch currentEvents from CMS
  const [currentEvents, err] = await getCurrentEvents();

  if (err !== null || err === undefined) throw err;
  if (currentEvents === null) throw new Error("Uncaught error with currentEvents API call");

  const sortedCurrentEvents = getSortedEvents(currentEvents);

  const featuredPersonData = execData.find((x) => x.position === "President");

  if (featuredPersonData === undefined) {
    throw "Could not find person to feature from teamData.ts";
  }

  return {
    props: {
      currentEventsRaw: sortedCurrentEvents.map((x) => x.toJSON()),
      sponsors: sponsorsData,
      featuredPersonData: featuredPersonData,
      spArcLink: spArcLink,
      pageData: homePageData,
    },
  };
};

export default Home;
