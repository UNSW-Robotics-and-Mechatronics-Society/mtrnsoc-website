import styles from "./YearArrowSelector.module.scss";

type YearArrowSelectorProps = {
  selectedYear: number;
  currentYear: number;
  availableYears: number[];
  onYearChange: ( year: number ) => void; // Callback to update the year
};

const YearArrowSelector = ( {
  selectedYear,
  currentYear,
  availableYears,
  onYearChange,
}: YearArrowSelectorProps ): JSX.Element =>
{
  const currentIndex = availableYears.indexOf( selectedYear );

  const handlePrevious = () =>
  {
    if ( currentIndex > 0 )
    {
      onYearChange( availableYears[ currentIndex - 1 ] );
    }
  };

  const handleNext = () =>
  {
    if ( currentIndex < availableYears.length - 1 )
    {
      onYearChange( availableYears[ currentIndex + 1 ] );
    }
  };

  return (
    <div className={ styles.yearSelectorContainer }>
      <button
        onClick={ handlePrevious }
        disabled={ currentIndex === 0 }
        className={ styles.arrowButton }
      >
        { "<" }
      </button>
      <span className={ `${ styles.yearDisplay } ${ currentYear === selectedYear ? "text-secondary" : "text-[#333]" }` }>{ selectedYear }</span>
      <button
        onClick={ handleNext }
        disabled={ currentIndex === availableYears.length - 1 }
        className={ styles.arrowButton }
      >
        { ">" }
      </button>
    </div>
  );
};

export default YearArrowSelector;
