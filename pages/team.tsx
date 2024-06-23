import type { GetStaticProps, NextPage } from "next";
import { ContentContainer, MetaTags } from "components";
import { Banner } from "components";
import ProfileCards from "components/Profile/ProfileCards";
import SubcomProfileCards from "components/Profile/SubcomProfileCards";
import { PageInformation, teamPageData } from "data/navLinksData";
import { emailData } from "data/socialsData";
import { ProfileData, SubcomProfileData, directorData, execData, subcomData } from "data/teamData";
import styles from "styles/team.module.scss";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

type SectionExecutivesProps = {
  execProfileData: ProfileData[];
  email: string;
  text?: string;
};

const SectionExecutives = ({
  execProfileData,
  email,
  text = "Executives",
}: SectionExecutivesProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text={text} />
        <ProfileCards profileData={execProfileData} background="executive" contactEmail={email} />
      </div>
    </ContentContainer>
  );
};

type SectionDirectorsProps = {
  directorProfileData: ProfileData[];
  email: string;
};

const SectionDirectors = ({ directorProfileData, email }: SectionDirectorsProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Directors" />
        <ProfileCards
          profileData={directorProfileData}
          background="director"
          contactEmail={email}
        />
      </div>
    </ContentContainer>
  );
};

type SectionSubcommitteeProps = {
  subcomProfileData: SubcomProfileData[];
};

const SectionSubcommittee = ({ subcomProfileData }: SectionSubcommitteeProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Subcommittee" />
        <SubcomProfileCards subcomData={subcomProfileData} />
      </div>
    </ContentContainer>
  );
};

type TeamPageProps = {
  directorProfileData: ProfileData[];
  subcomProfileData: SubcomProfileData[];
  email: string;
  pageData: PageInformation;
  exec2023ProfileData: ProfileData[];
};

const Team: NextPage<TeamPageProps> = ({
  directorProfileData,
  subcomProfileData,
  email,
  pageData,
  exec2023ProfileData,
}) => {
  const scrollID = "teamPageScrollDiv";

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
        <SectionExecutives
          execProfileData={exec2023ProfileData}
          email={email}
          text="2024 Executives"
        />
        <SectionDirectors directorProfileData={directorProfileData} email={email} />
        <SectionSubcommittee subcomProfileData={subcomProfileData} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TeamPageProps> = async () => {
  return {
    props: {
      directorProfileData: directorData,
      subcomProfileData: subcomData,
      // NOTE: Based on how children components were designed, 'mailto:' is added to email string
      email: emailData.display,
      pageData: teamPageData,
      exec2023ProfileData: execData,
    },
  };
};

export default Team;
