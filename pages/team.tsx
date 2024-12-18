import type { GetStaticProps, NextPage } from "next";
import { ContentContainer, MetaTags } from "components";
import { Banner } from "components";
import ProfileCards from "components/Profile/ProfileCards";
import SubcomProfileCards from "components/Profile/SubcomProfileCards";
import { PageInformation, teamPageData } from "data/navLinksData";
import { emailData } from "data/socialsData";
import { TeamData, ProfileData, SubcomProfileData, loadTeamData, getAvailableYearTeamData } from "data/teamData";
import styles from "styles/team.module.scss";
import { useState } from "react";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ( { text }: TitleHeaderProps ): JSX.Element =>
{
  return <h1 className={ styles.title }>{ text.toUpperCase() }</h1>;
};

type SectionExecutivesProps = {
  execProfileData: ProfileData[];
  email: string;
  text?: string;
};

const SectionExecutives = ( {
  execProfileData,
  email,
  text = "Executives",
}: SectionExecutivesProps ): JSX.Element =>
{
  return (
    <ContentContainer>
      <div className={ styles.sectionContainer }>
        <TitleHeader text={ text } />
        <ProfileCards profileData={ execProfileData } background="executive" contactEmail={ email } />
      </div>
    </ContentContainer>
  );
};

type SectionDirectorsProps = {
  directorProfileData: ProfileData[];
  email: string;
};

const SectionDirectors = ( { directorProfileData, email }: SectionDirectorsProps ): JSX.Element =>
{
  return (
    <ContentContainer>
      <div className={ styles.sectionContainer }>
        <TitleHeader text="Directors" />
        <ProfileCards
          profileData={ directorProfileData }
          background="director"
          contactEmail={ email }
        />
      </div>
    </ContentContainer>
  );
};

type SectionSubcommitteeProps = {
  subcomProfileData: SubcomProfileData[];
};

const SectionSubcommittee = ( { subcomProfileData }: SectionSubcommitteeProps ): JSX.Element =>
{
  return (
    <ContentContainer>
      <div className={ styles.sectionContainer }>
        <TitleHeader text="Subcommittee" />
        <SubcomProfileCards subcomData={ subcomProfileData } />
      </div>
    </ContentContainer>
  );
};

type TeamPageProps = {
  currentYear: number;
  availableYears: number[];
  execProfileData: ProfileData[];
  directorProfileData: ProfileData[];
  subcomProfileData: SubcomProfileData[];
  email: string;
  pageData: PageInformation;
};

const Team: NextPage<TeamPageProps> = ( {
  currentYear,
  availableYears,
  execProfileData,
  directorProfileData,
  subcomProfileData,
  email,
  pageData,
} ) =>
{
  const scrollID = "teamPageScrollDiv";

  const [ yearSelected, setYearSelected ] = useState<number>( currentYear );
  const [ execProfileDataState, setExecProfileDataState ] = useState<ProfileData[]>( execProfileData );
  const [ directorProfileDataState, setDirectorProfileDataState ] = useState<ProfileData[]>( directorProfileData );
  const [ subcomProfileDataState, setSubcomProfileDataState ] = useState<SubcomProfileData[]>( subcomProfileData );

  return (
    <div className="h-full">
      <MetaTags
        title={ pageData.title }
        description={ pageData.description }
        imgURL={ pageData.bannerImageURL }
      />
      <div>
        <Banner
          imgURL={ pageData.bannerImageURL }
          text={ pageData.bannerText }
          arrow={ true }
          position="center"
          scrollToID={ scrollID }
        />
        <div id={ scrollID }></div>
        <SectionExecutives
          execProfileData={ execProfileDataState }
          email={ email }
          text="Executives"
        />
        <SectionDirectors directorProfileData={ directorProfileDataState } email={ email } />
        <SectionSubcommittee subcomProfileData={ subcomProfileDataState } />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TeamPageProps> = async () =>
{
  const year: number = new Date().getFullYear();
  const teamData: TeamData = await loadTeamData( year );
  const availableYears: number[] = await getAvailableYearTeamData();
  return {
    props: {
      currentYear: year,
      availableYears: availableYears,
      execProfileData: teamData.execs,
      directorProfileData: teamData.directors,
      subcomProfileData: teamData.subcoms,
      // NOTE: Based on how children components were designed, 'mailto:' is added to email string
      email: emailData.display,
      pageData: teamPageData,
    },
  };
};

export default Team;
