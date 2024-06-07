type TermDateInformation = {
  /**
   * String date in the format of DD/MM/YYYY
   */
  t1: string;
  /**
   * String date in the format of DD/MM/YYYY
   */
  t2: string;
  /**
   * String date in the format of DD/MM/YYYY
   */
  t3: string;
};

export type YearDateInformation = {
  year: number;
  termStartDates: TermDateInformation;
};

// NOTE: This does have to be updated each year
export const yearDates: YearDateInformation[] = [
  { year: 2024, termStartDates: { t1: "12/02/2024", t2: "27/05/2024", t3: "09/09/2024" } },
  { year: 2023, termStartDates: { t1: "06/02/2023", t2: "29/05/2023", t3: "11/09/2023" } },
  { year: 2022, termStartDates: { t1: "14/02/2022", t2: "30/05/2022", t3: "12/09/2022" } },
  { year: 2021, termStartDates: { t1: "15/02/2021", t2: "31/05/2021", t3: "13/09/2021" } },
];
