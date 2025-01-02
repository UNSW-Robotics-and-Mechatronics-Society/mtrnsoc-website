import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Banner, ContentContainer, MetaTags } from "components";
import { PageInformation, sponsorsPageData } from "data/navLinksData";
import { SocialData, industryEmailData } from "data/socialsData";
import sponsorsData, { SponsorData } from "data/sponsorsData";
import styles from "styles/sponsors.module.scss";

type SponsorsPageProps = {
  affiliates: SponsorData[];
  sponsors: SponsorData[];
  emailData: SocialData;
  pageData: PageInformation;
};

const Sponsors: NextPage<SponsorsPageProps> = ({ affiliates, sponsors, emailData, pageData }) => {
  const scrollID = "sponsorsPageScrollDiv";

  return (
    <div className="h-full">
      <MetaTags
        title={pageData.title}
        description={pageData.description}
        imgURL={pageData.bannerImageURL}
      />
      <Banner
        imgURL={pageData.bannerImageURL}
        text={pageData.bannerText}
        arrow={true}
        position="center"
        scrollToID={scrollID}
      />
      <div id={scrollID}></div>
      <ContentContainer>
        <div className={styles.mainContainer}>
          <p className={styles.textContainer}>
            If you are interested in sponsoring our society, or would like to know more about our
            sponsor packages, please contact us at{" "}
            <span className="underline">
              <Link legacyBehavior href={emailData.url}>
                {emailData.display}
              </Link>
            </span>
            .
          </p>
          <div className={styles.sectionContainer}>
            <h1 className={styles.sectionTitle}>Proudly Supported By</h1>
            <div className={styles.sectionImagesContainer}>
              {sponsors.map((x) => (
                <Link legacyBehavior href={x.link} key={x.alt}>
                  <a target="_blank">
                    <img key={x.alt} src={x.src} alt={x.alt} className={styles.sectionImage} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <h1 className={styles.sectionTitle}>Affiliations</h1>
            <div className={styles.sectionImagesContainer}>
              {affiliates.map((x) => (
                <Link legacyBehavior href={x.link} key={x.alt}>
                  <a target="_blank">
                    <img src={x.src} alt={x.alt} className={styles.sectionImage} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SponsorsPageProps> = async () => {
  const affiliates = sponsorsData.filter((x) => x.type === "affiliate");
  const sponsors = sponsorsData.filter((x) => x.type === "sponsor");

  return {
    props: {
      affiliates: affiliates,
      sponsors: sponsors,
      emailData: industryEmailData,
      pageData: sponsorsPageData,
    },
  };
};

export default Sponsors;
