import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import useEvents from "hooks/useEvents";
import { Event } from "util/eventsHelpers";
import useWindowDimensions from "util/useWindowDimensions";
import { Banner, ContentContainer, MetaTags, OurCurrentEvents } from "components";
import { PositionType } from "components/Banner/Banner";
import { PageInformation, homePageData } from "data/navLinksData";
import { spArcLink } from "data/socialsData";
import sponsorsData, { SponsorData } from "data/sponsorsData";
import { ProfileData, loadTeamData } from "data/teamData";
import styles from "styles/index.module.scss";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ( { text }: TitleHeaderProps ): JSX.Element =>
{
  return <h1 className={ styles.title }>{ text.toUpperCase() }</h1>;
};

const SectionWhoWeAre = (): JSX.Element =>
{
  return (
    <ContentContainer>
      <div className={ styles.sectionContainer }>
        <TitleHeader text="Who we are" />
        <div className={ styles.WhoWeAreTextContainer }>
          <p>
            UNSW Robotics and Mechatronics Society (<b>RAMSoc</b>) is a student-led society that aims to promote
            Robotics and Mechatronic Engineering opportunities and pathways inside UNSW. As the largest mechatronics-related society within the university, RAMSoc has a
            rapidly growing membership base, already with <b>over 1000 members</b>.
          </p>
          <br />
          <p>
            We run workshops, projects, competitions, industry nights, and social events to engage
            students with real-world projects. These projects allow students to develop them
            professionally and technically, as well as introducing them to a community of
            like-minded individuals.
          </p>
        </div>
        <div className={ styles.WhoWeAreButtonsContainer }>
          <Link legacyBehavior href="/team">
            <a className="pb-5 px-5">
              <button className={ styles.buttonStyle }>Meet Our Team</button>
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

const SectionOurEvents = ( { currentEvents }: SectionOurEventsProps ): JSX.Element =>
{
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={ styles.sectionContainer }>
        <TitleHeader text="Our Upcoming Events" />
        <OurCurrentEvents currentEvents={ currentEvents } buttonStyle={ styles.buttonStyle } />
      </div>
    </ContentContainer>
  );
};

type SponsorsSectionProps = {
  sponsors: SponsorData[];
};

const SponsorSection = ( { sponsors }: SponsorsSectionProps ): JSX.Element =>
{
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={ styles.sectionContainer }>
        <TitleHeader text="Proudly Supported By" />
        <div className={ styles.sponsorsContainer }>
          { sponsors.map( ( sponsor ) =>
          {
            return (
              <Link legacyBehavior href={ sponsor.link } key={ sponsor.alt }>
                <a target="_blank">
                  <img src={ sponsor.src } alt={ sponsor.alt } className={ styles.sponsorLogos } />
                </a>
              </Link>
            );
          } ) }
        </div>
      </div>
    </ContentContainer>
  );
};

type JoinUsSectionPops = {
  spArcLink: string;
};

const JoinUsSection = ( { spArcLink }: JoinUsSectionPops ): JSX.Element =>
{
  return (
    <ContentContainer>
      <div className={ styles.sectionContainer }>
        <TitleHeader text="Join The Society" />
        <div>
          <p className="pb-10">Want to be involved? Join Us!</p>
          <Link legacyBehavior href={ spArcLink }>
            <a target="_blank">
              <button className={ styles.buttonStyle }>Join us on SpArc</button>
            </a>
          </Link>
        </div>
      </div>
    </ContentContainer>
  );
};

type HomePageProps = {
  sponsors: SponsorData[];
  featuredPersonData: ProfileData;
  spArcLink: string;
  pageData: PageInformation;
};

const Home: NextPage<HomePageProps> = ( { sponsors, featuredPersonData, spArcLink, pageData } ) =>
{
  const { width } = useWindowDimensions();
  const [ position, setPosition ] = React.useState<PositionType>( "bottom-left" );

  const { currentEventsRaw } = useEvents();
  React.useEffect( () =>
  {
    // 639px is based on a set TailwindCSS breakpoint
    if ( width !== null ) setPosition( width <= 639 ? "center" : "bottom-left" );
  }, [ width ] );

  const currentEvents = currentEventsRaw?.map( ( x ) => Event.eventFromEventDetails( x ) ) ?? [];
  const scrollID = "homePageScrollDiv";

  return (
    <section className="h-full">
      <MetaTags
        title={ pageData.title }
        description={ pageData.description }
        imgURL={ pageData.bannerImageURL }
      />
      <div className={ styles.mainContainer }>
        <Banner
          imgURL={ pageData.bannerImageURL }
          isBrand={ true }
          arrow={ true }
          position={ position }
          scrollToID={ scrollID }
        />
        <div id={ scrollID }></div>
        <SectionWhoWeAre />
        <SectionOurEvents currentEvents={ currentEvents } />
        {/* <SectionMeetTheTeam featuredPersonData={ featuredPersonData } /> */ }
        <JoinUsSection spArcLink={ spArcLink } />
        <SponsorSection sponsors={ sponsors } />
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () =>
{
  const year = new Date().getFullYear();
  const teamData = await loadTeamData( year );
  const featuredPersonData = teamData.execs.find( ( x ) => x.role === "President" );

  if ( featuredPersonData === undefined )
  {
    throw "Could not find person to feature from teamData.ts";
  }

  return {
    props: {
      sponsors: sponsorsData,
      featuredPersonData: featuredPersonData,
      spArcLink: spArcLink,
      pageData: homePageData,
    },
  };
};

export default Home;
