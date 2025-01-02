import type { ProfileData } from "data/teamData";
import styles from "./ProfileCards.module.scss";

type Background = "director" | "executive";

type ProfileCardsProp = {
  profileData: ProfileData[];
  background: Background;
};

const groupProfilesByRole = ( profileData: ProfileData[] ): Record<string, ProfileData[]> =>
{
  return profileData.reduce( ( groups: Record<string, ProfileData[]>, profile: ProfileData ) =>
  {
    let groupKey = profile.role
      .split( " " )
      .filter( ( word ) => word.toLowerCase() !== "director" )
      .join( " " )
      .toUpperCase();

    if ( groupKey === "IT" ) groupKey = "Information Technology (IT)";
    if ( groupKey === "WOMEN IN ENGINEERING" ) groupKey = "Women in Engineering (WIM)";

    if ( !groups[ groupKey ] ) groups[ groupKey ] = [];
    groups[ groupKey ].push( profile );
    return groups;
  }, {} );
};

const ProfileCard = ( { profile, backgroundClass }: { profile: ProfileData; backgroundClass: string } ) =>
{
  const hasLinkedIn = profile.linkedIn != null;

  return (
    <div className={ `${ styles.profileContainer } ${ backgroundClass }` }>
      <div className={ `${ styles.pictureWrapper } ${ hasLinkedIn ? styles.hoverEnabled : "" }` }>
        <img src={ profile.profileImg } alt={ profile.name } className={ styles.picture } />
        { profile.linkedIn != null && (
          <a href={ profile.linkedIn } target="_blank" rel="noreferrer" className={ styles.linkedInIcon }>
            <img src="/logos/linkedinLogo.svg" alt="LinkedIn Logo" />
          </a>
        ) }
      </div>
      <div className={ styles.textContainer }>
        <h1 className={ styles.name }>{ profile.name }</h1>
        <div className={ styles.position }>{ profile.role }</div>
      </div>
      <div className={ styles.links }>
        <a
          className="text-primary underline-offset-4 underline hover:text-secondary"
          href={ `mailto:${ profile.email }` }
        >
          { profile.email }
        </a>
      </div>
    </div>
  );
};

const ProfileSection = ( { group, profiles, backgroundClass }: { group: string; profiles: ProfileData[]; backgroundClass: string } ) =>
{
  return (
    <div className={ styles.section }>
      <h2 className={ styles.sectionTitle }>{ group }</h2>
      <div className={ styles.profileGrid }>
        { profiles.map( ( profile, index ) => (
          <ProfileCard key={ `${ profile.role } card ${ index }` } profile={ profile } backgroundClass={ backgroundClass } />
        ) ) }
      </div>
    </div>
  );
};

const ProfileCards = ( { profileData, background }: ProfileCardsProp ): JSX.Element =>
{
  const backgroundClass = background === "director" ? styles.directorBGColour : styles.execBGColour;

  if ( background === "director" )
  {
    const groupedProfiles = groupProfilesByRole( profileData );

    return (
      <div className={ styles.mainContainer }>
        { Object.entries( groupedProfiles ).map( ( [ group, profiles ] ) => (
          <ProfileSection
            key={ group }
            group={ group }
            profiles={ profiles }
            backgroundClass={ backgroundClass }
          />
        ) ) }
      </div>
    );
  }

  return (
    <div className={ styles.mainContainer }>
      { profileData.map( ( profile, index ) => (
        <ProfileCard
          key={ `${ profile.role } card ${ index }` }
          profile={ profile }
          backgroundClass={ backgroundClass }
        />
      ) ) }
    </div>
  );
};

export default ProfileCards;
