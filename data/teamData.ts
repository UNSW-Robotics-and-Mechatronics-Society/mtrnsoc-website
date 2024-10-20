/* eslint-disable linebreak-style */
export type ProfileData = {
  src: string;
  id: string;
  position: string;
  linkedIn: string | null;
};

export type SubcomProfileData = {
  portfolioName: string;
  members: string[];
};

// alt and name is id, email is mtrnsoc email, classnames are the same,
export const execData: ProfileData[] = [
  {
    src: "/images/profiles/AngusW.jpg",
    id: "Angus Wang",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/angus-wang-2a4905203/",
  },
  {
    src: "/images/profiles/JessL.jpg",
    id: "Jess Luo",
    position: "Vice President",
    linkedIn: "https://www.linkedin.com/in/jess-luo-0a7282208/",
  },
  {
    src: "/images/profiles/RubyC.jpg",
    id: "Ruby Chang",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/ruby-chang-7236891b3/",
  },
  {
    src: "/images/profiles/Muhammad.jpg",
    id: "Muhammad Haffejee",
    position: "Arc Delegate",
    linkedIn: "https://www.linkedin.com/in/muhammad-haffejee/",
  },
  {
    src: "/images/profiles/CarmenZ.jpg",
    id: "Carmen Zhang",
    position: "Treasurer",
    linkedIn: "www.linkedin.com/in/jiawen-zhang-1aa622203",
  },
  {
    src: "/images/profiles/NahiyanM.jpg",
    id: "Nahiyan Mahmud",
    position: "Grievance & EDI Officer",
    linkedIn: "https://www.linkedin.com/in/nahiyan-mahmud-928b90265/",
  },
  {
    src: "/images/profiles/AkhilG.jpg",
    id: "Akhil Govan",
    position: "Technical Executive",
    linkedIn: "https://www.linkedin.com/in/akhil-govan/",
  },
];

export const directorData: ProfileData[] = [
  {
    src: "/images/profiles/AnirudhR.jpg",
    id: "Anirudh Raju",
    position: "Creatives Director",
    linkedIn: "https://www.linkedin.com/in/anirudh-raju-7983a7228/",
  },
  {
    src: "/images/profiles/RamzelL.jpg",
    id: "Ramzel Liwanag",
    position: "Creatives Director",
    linkedIn: "https://www.linkedin.com/in/ramzel-liwanag-18358a202/",
  },
  {
    src: "/images/profiles/AnchalaM.jpg",
    id: "Anchala Marugan",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/anchala-marugan-272682242/",
  },
  {
    src: "/images/profiles/EvanR.jpg",
    id: "Evan Richardson",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/evan-richardson-aa797b227/",
  },
  {
    src: "/images/profiles/KaiT.jpg",
    id: "Kai Turner",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/kaiturnersyd/",
  },
  {
    src: "/images/profiles/SanikaR.jpg",
    id: "Sanika Raje",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/sanikaraje/",
  },
  {
    src: "/images/profiles/WeichenT.jpg",
    id: "Weichen Tie",
    position: "IT Director",
    linkedIn: "https://www.linkedin.com/in/weichentie/",
  },
  {
    src: "/images/profiles/ChrisS.jpg",
    id: "Chris Schmooel",
    position: "Marketing Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/ChaeyeonL.jpg",
    id: "Chaeyeon Lee",
    position: "Marketing Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/BhaviC.jpg",
    id: "Bhavi Chauhan",
    position: "Projects Director",
    linkedIn: "https://www.linkedin.com/in/bhavichauhan/",
  },
  {
    src: "/images/profiles/RamG.jpg",
    id: "Ram Ganesh",
    position: "Projects Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/JefferyZ.jpg",
    id: "Jeffery Zhu",
    position: "Socials Director",
    linkedIn: "https://www.linkedin.com/in/jeffrey-zhu37/",
  },
  {
    src: "/images/profiles/MichaelD.jpg",
    id: "Michael Dawson",
    position: "Socials Director",
    linkedIn: "https://www.linkedin.com/in/michael-dawson-14740b26a/",
  },
  {
    src: "/images/profiles/ElsaD.jpg",
    id: "Elsa Doan",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/elsa-doan-7a2bb4264/",
  },
  {
    src: "/images/profiles/YangyueJ.jpg",
    id: "Yangyue Jiang",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/yangyue-jiang-a08888264/",
  },
];

export const subcomData: SubcomProfileData[] = [
  {
    portfolioName: "Socials Team",
    members: ["Adyan Pang", "Candy Tang", "Sandeera Marasinghe", "Sorita Um"],
  },
  {
    portfolioName: "Workshops Team",
    members: ["Albert Tri", "Alex Hunter", "Sho Watanabe", "Sophie Fox"],
  },
  {
    portfolioName: "Projects Team",
    members: ["Alan Choi", "Cormac Morrison", "Petra Chan", "Reshika Aich", "Ryan Kwok"],
  },
  {
    portfolioName: "Industry & Sponsors Team",
    members: ["Coraly Penano", "Vedant Tyagi"],
  },
  {
    portfolioName: "Creatives Team",
    members: ["Cynthia Ng", "Dhruv Joshi"],
  },
  {
    portfolioName: "Marketing Team",
    members: [
      "Alan Feng",
      "Benny Cheng",
      "Ethan Khisa",
      "Simeon Ling",
      "Sithula Gamage",
      "Wesley Donald",
    ],
  },
];
