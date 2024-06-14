import Link from "next/link";
import defaultSocialsData from "data/socialsData";
import ContentContainer from "../ContentContainer/ContentContainer";
import styles from "./Footer.module.scss";

const TopHalfLogos = () => {
  return (
    <div className="flex flex-row justify-center my-2">
      {defaultSocialsData.map((social) => (
        <Link legacyBehavior href={social.url} key={social.name}>
          <a target="_blank">
            <img
              src={social.logoUrl}
              alt={social.altText}
              aria-label={social.name}
              className={`${styles.socialLogo} ${styles.culturedWhiteColourLogo}`}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

const BottomText = () => {
  return (
    <div className="text-off-white h-full text-center">
      Copyright &copy; 2024 UNSW Mechatronics Society - All Rights Reserved.
    </div>
  );
};

const DividerLine = () => {
  // as percentages
  // For some reason, only 90 or 80 works
  const lineWidth = 90;
  return (
    <div className={`w-[${lineWidth}%] pl-[${100 - lineWidth}%] my-4`}>
      <hr className="border-solid border-off-white border-t-2" />
    </div>
  );
};

const Footer = (): JSX.Element => {
  return (
    <div className="w-full h-full grid place-items-center bg-yale-blue">
      <ContentContainer>
        <div className="h-full w-full grid place-items-center">
          <div className="w-full flex flex-col content-center">
            <TopHalfLogos />
            <DividerLine />
            <BottomText />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Footer;
