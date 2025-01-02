import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ContentContainer, MetaTags } from "components";
import { PageInformation, contactPageData } from "data/navLinksData";
import defaultSocialsData, { SocialData } from "data/socialsData";
import styles from "styles/contact.module.scss";

type ContactPageProps = {
  socialsData: SocialData[];
  pageData: PageInformation;
};

const Contact: NextPage<ContactPageProps> = ({ socialsData, pageData }) => {
  // NOTE: This page does not have a banner, but will use the home page banner as its og:image

  const generalEmailData = socialsData.find((x) => x.name === "General Email");
  if (generalEmailData === undefined) throw "Cannot find generalEmailData from socialData.ts";
  const industryEmailData = socialsData.find((x) => x.name === "Industry Email");
  if (industryEmailData === undefined) throw "Cannot find industryEmailData from socialData.ts";
  const technicalEmailData = socialsData.find((x) => x.name === "Technical Email");
  if (technicalEmailData === undefined) throw "Cannot find technicalEmailData from socialData.ts";

  return (
    <div className={styles.pageContainer}>
      <MetaTags
        title={pageData.title}
        description={pageData.description}
        imgURL={pageData.bannerImageURL}
      />
      <ContentContainer>
        <div className={styles.mainContainer}>
          <h1 className="text-3xl font-semibold mb-4">Wanna get in touch?</h1>
          <p className="text-2xl font-medium mb-1">For General Enquires</p>
          <p className="text-lg underline mb-10">
            <Link legacyBehavior href={generalEmailData.url}>
              <a>{generalEmailData.display}</a>
            </Link>
          </p>
          <p className="text-2xl font-medium mb-1">For Industry & Sponsorship Enquires</p>
          <p className="text-lg underline mb-10">
            <Link legacyBehavior href={industryEmailData.url}>
              <a>{industryEmailData.display}</a>
            </Link>
          </p>
          <p className="text-2xl font-medium mb-1">For Technical Enquires</p>
          <p className="text-lg underline mb-5">
            <Link legacyBehavior href={technicalEmailData.url}>
              <a>{technicalEmailData.display}</a>
            </Link>
          </p>
          {/* <h1 className="text-3xl font-semibold mt-6 mb-4">Stay Connected</h1>
          <div className={ styles.socialIconContainer }>
            { socialsData.filter( ( social ) => !social.name.toLowerCase().includes( "email" ) ).map( ( social ) => (
              <Link legacyBehavior href={ social.url } key={ social.name }>
                <a target="_blank">
                  <img
                    src={ social.logoUrl }
                    alt={ social.altText }
                    aria-label={ social.name }
                    className={ `${ styles.logoSize } ${ styles.logoColour }` }
                  />
                </a>
              </Link>
            ) ) }
          </div> */}
        </div>
      </ContentContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  return {
    props: {
      socialsData: defaultSocialsData,
      pageData: contactPageData,
    },
  };
};

export default Contact;
