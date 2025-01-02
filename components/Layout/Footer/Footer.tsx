import Link from "next/link";
import defaultSocialsData from "data/socialsData";
import ContentContainer from "../ContentContainer/ContentContainer";
import styles from "./Footer.module.scss";

const TopHalfLogos = () => {
  const generalEmailData = defaultSocialsData.find((social) => social.name === "General Email");
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-off-white text-lg font-medium mb-4">Follow Our Socials</h2>
      <div className="flex flex-row justify-center">
        {defaultSocialsData
          .filter((social) => !social.name.toLowerCase().includes("email"))
          .map((social) => (
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
      {generalEmailData && (
        <Link legacyBehavior href={generalEmailData.url}>
          <a className="text-off-white text-sm mt-4 hover:underline" aria-label="General Email">
            {generalEmailData.display}
          </a>
        </Link>
      )}
    </div>
  );
};

const BottomText = () => {
  return (
    <div className="text-off-white h-full text-center py-3 text-xs">
      Copyright &copy; 2025 UNSW Robotics and Mechatronics Society - All Rights Reserved.
    </div>
  );
};

const DividerLine = () => {
  // as percentages
  const lineWidth = 20;
  return (
    <div className="flex justify-center">
      <hr style={{ width: `${lineWidth}rem` }} />
    </div>
  );
};

const Footer = (): JSX.Element => {
  return (
    <ContentContainer customBackgroundColour="bg-primary">
      <div className="w-full h-full grid place-items-center">
        <div className="h-full w-full grid place-items-center">
          <div className="w-full flex flex-col content-center">
            <TopHalfLogos />
            <DividerLine />
            <BottomText />
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Footer;
