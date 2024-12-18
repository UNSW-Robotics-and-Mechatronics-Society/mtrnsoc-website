import { SubcomProfileData } from "data/teamData";
import styles from "./SubcomProfileCards.module.scss";

type SubcomProfileCardsType = {
  subcomData: SubcomProfileData[];
};

const SubcomProfileCards = ( { subcomData }: SubcomProfileCardsType ): JSX.Element =>
{
  return (
    <div className={ styles.subcomMainContainer }>
      { subcomData.map( ( team, indx ) =>
      {
        return (
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
        );
      } ) }
    </div>
  );
};

export default SubcomProfileCards;
