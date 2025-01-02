import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ContentContainer, MetaTags } from "components";
import { Banner } from "components";
import ProfileCards from "components/Profile/ProfileCards";
import SubcomProfileCards from "components/Profile/SubcomProfileCards";
import YearArrowSelector from "components/Team/YearArrowSelector";
import { PageInformation, teamPageData } from "data/navLinksData";
import {
  ProfileData,
  SubcomProfileData,
  TeamData,
  getAvailableYearTeamData,
  loadTeamData,
} from "data/teamData";
import styles from "styles/team.module.scss";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

type SectionExecutivesProps = {
  execProfileData: ProfileData[];
  text?: string;
};

const SectionExecutives = ({
  execProfileData,
  text = "Executives",
}: SectionExecutivesProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text={text} />
        <ProfileCards profileData={execProfileData} background="executive" />
      </div>
    </ContentContainer>
  );
};

type SectionDirectorsProps = {
  directorProfileData: ProfileData[];
};

const SectionDirectors = ({ directorProfileData }: SectionDirectorsProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Directors" />
        <ProfileCards profileData={directorProfileData} background="director" />
      </div>
    </ContentContainer>
  );
};

type SectionSubcommitteeProps = {
  selectedYear: number;
  subcomProfileData: SubcomProfileData[];
};

const SectionSubcommittee = ({
  selectedYear,
  subcomProfileData,
}: SectionSubcommitteeProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Subcommittee" />
        <SubcomProfileCards selectedYear={selectedYear} subcomData={subcomProfileData} />
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
  pageData: PageInformation;
};

const Team: NextPage<TeamPageProps> = ({
  currentYear,
  availableYears,
  execProfileData,
  directorProfileData,
  subcomProfileData,
  pageData,
}) => {
  const scrollID = "teamPageScrollDiv";

  const [yearSelected, setYearSelected] = useState<number>(currentYear);
  const [execProfileDataState, setExecProfileDataState] = useState<ProfileData[]>(execProfileData);
  const [directorProfileDataState, setDirectorProfileDataState] =
    useState<ProfileData[]>(directorProfileData);
  const [subcomProfileDataState, setSubcomProfileDataState] =
    useState<SubcomProfileData[]>(subcomProfileData);

  const handleYearChange = async (year: number) => {
    try {
      setYearSelected(year);

      const response = await fetch(`/api/teamData/${year}`);
      if (!response.ok) throw new Error("Failed to fetch team data");

      const teamData = await response.json();

      setExecProfileDataState(teamData.execs);
      setDirectorProfileDataState(teamData.directors);
      setSubcomProfileDataState(teamData.subcoms);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  return (
    <div className="h-full">
      <MetaTags
        title={pageData.title}
        description={pageData.description}
        imgURL={pageData.bannerImageURL}
      />
      <div>
        <Banner
          imgURL={pageData.bannerImageURL}
          text={pageData.bannerText}
          arrow={true}
          position="center"
          scrollToID={scrollID}
        />
        <div id={scrollID}></div>
        <YearArrowSelector
          selectedYear={yearSelected}
          currentYear={currentYear}
          availableYears={availableYears}
          onYearChange={handleYearChange}
        />
        <SectionExecutives execProfileData={execProfileDataState} text="Executives" />
        <SectionDirectors directorProfileData={directorProfileDataState} />
        <SectionSubcommittee
          selectedYear={yearSelected}
          subcomProfileData={subcomProfileDataState}
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TeamPageProps> = async () => {
  const year: number = new Date().getFullYear();
  const teamData: TeamData = await loadTeamData(year);
  const availableYears: number[] = await getAvailableYearTeamData();
  return {
    props: {
      currentYear: year,
      availableYears: availableYears,
      execProfileData: teamData.execs,
      directorProfileData: teamData.directors,
      subcomProfileData: teamData.subcoms,
      pageData: teamPageData,
    },
  };
};

export default Team;
