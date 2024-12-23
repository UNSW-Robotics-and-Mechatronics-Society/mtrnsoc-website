import type { ProfileData } from "data/teamData";
import styles from "./ProfileCards.module.scss";

type Background = "director" | "executive";

type ProfileCardsProp = {
  profileData: ProfileData[];
  background: Background;
  contactEmail: string;
};

const ProfileCards = ( { profileData, background, contactEmail }: ProfileCardsProp ): JSX.Element =>
{
  const backgroundClass = background === "director" ? styles.directorBGColour : styles.execBGColour;
  return (
    <div className={ styles.mainContainer }>
      { profileData.map( ( profile, index ) =>
      {
        return (
          <div
            className={ `${ styles.profileContainer } ${ backgroundClass }` }
            key={ `${ profile.role } card ${ index }` }
          >
            <img src={ profile.profileImg } alt={ profile.name } className={ styles.picture } />
            <div className={ styles.textContainer }>
              <h1 className={ styles.name }>{ profile.name }</h1>
              <div className={ styles.position }>{ profile.role }</div>
            </div>
            <div className={ styles.links }>
              { profile.linkedIn !== null && (
                <a rel="noreferrer" target="_blank" href={ profile.linkedIn }>
                  <img src="/logos/linkedinLogo.svg" alt="LinkedInLogo" className={ styles.logo } />
                </a>
              ) }
              <a href={ `mailto:${ contactEmail }` }>
                <img src="/logos/emailLogo.svg" alt="LinkedInLogo" className={ styles.logo } />
              </a>
            </div>
          </div>
        );
      } ) }
    </div>
  );
};

export default ProfileCards;
