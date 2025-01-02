import { SubcomProfileData } from "data/teamData";
import styles from "./SubcomProfileCards.module.scss";
import Link from "next/link";

type SubcomProfileCardsType = {
  selectedYear: number;
  subcomData: SubcomProfileData[];
};

const SubcomProfileCards = ( { selectedYear, subcomData }: SubcomProfileCardsType ): JSX.Element =>
{
  return (
    <div className={ styles.subcomMainContainer }>
      { subcomData.length === 0 ? (
        <div className={ styles.joinUsMessage }>
          <Link legacyBehavior href="">
            <a className="pb-5 px-5">
              <button className={ styles.buttonStyle }>Join Our Team</button>
            </a>
          </Link>
          <p>Be part of our { selectedYear } team and contribute to something great!</p>
        </div>
      ) : (
        subcomData.map( ( team, indx ) => (
          <div
            className={ styles.subcomContainer }
            key={ `${ team.portfolio } subcommittee section` }
          >
            <h1 className={ styles.subcomPosition }>{ team.portfolio }</h1>
            <div className={ styles.subcomName }>
              { team.members.map( ( memberName ) => (
                <p key={ memberName }>{ memberName }</p>
              ) ) }
            </div>
          </div>
        ) )
      ) }
    </div>
  );
};


export default SubcomProfileCards;
