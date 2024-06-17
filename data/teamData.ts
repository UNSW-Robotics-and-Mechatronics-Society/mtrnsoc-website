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
    src: "/images/profiles/unknown.jpg",
    id: "Ruby Chang",
    position: "Secretary",
    linkedIn: null,
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
    src: "https://media.licdn.com/dms/image/D4D03AQELZCnuI7vKqw/profile-displayphoto-shrink_400_400/0/1702538095236?e=1723680000&v=beta&t=Op_Uz6PvVZ3-DO9lbRJwlUoMBrQOKQw6Uo_44PFEze4",
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
    src: "https://media.licdn.com/dms/image/D5603AQGscsedkaQMWQ/profile-displayphoto-shrink_400_400/0/1695558977411?e=1723680000&v=beta&t=VK7E3KK7PnadqRRjZUzX7vQhMfMkw8MjJtbhiws0fDM",
    id: "Anirudh Raju",
    position: "Creatives Director",
    linkedIn: "https://www.linkedin.com/in/anirudh-raju-7983a7228/",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQH0TD-LJSz2qw/profile-displayphoto-shrink_400_400/0/1703064539916?e=1723680000&v=beta&t=rNLC5Xe72cwOzvw4jR9Lsqh1t_VmZ9XbBcN3mcr2sQo",
    id: "Ramzel Liwanag",
    position: "Creatives Director",
    linkedIn: "https://www.linkedin.com/in/ramzel-liwanag-18358a202/",
  },
  {
    src: "https://media.licdn.com/dms/image/C4E03AQFA1PO3Tmi24Q/profile-displayphoto-shrink_400_400/0/1655626142678?e=1723680000&v=beta&t=IiGPZtXfQ5Mx3Z_88akzlFZ8sTP-42GN6hFgfitjeRk",
    id: "Anchala Marugan",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/anchala-marugan-272682242/",
  },
  {
    src: "https://media.licdn.com/dms/image/C5603AQEY0GnQ5QPeqg/profile-displayphoto-shrink_400_400/0/1638755757529?e=1723680000&v=beta&t=C9JfAJkFC1v3BfmI_AHdatkDoC4GZ354AyrWcP8-ZGU",
    id: "Evan Richardson",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/evan-richardson-aa797b227/",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQEPXmujpWg-OA/profile-displayphoto-shrink_400_400/0/1687115298315?e=1723680000&v=beta&t=eZGsPZB8W2k9MKRm38SuyUTbxZM4Bl_qn3jIONRJ8qI",
    id: "Kai Turner",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/kaiturnersyd/",
  },
  {
    src: "https://media.licdn.com/dms/image/C4D03AQFZLlYIpvvWNQ/profile-displayphoto-shrink_400_400/0/1614807709684?e=1723680000&v=beta&t=AneutTI4NNrlyCUFWpwQGPZmeSBDFdVIzE-teGDqufc",
    id: "Sanika Raje",
    position: "Industry & Sponsorships Director",
    linkedIn: "https://www.linkedin.com/in/sanikaraje/",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQGo1MatAF2fwg/profile-displayphoto-shrink_400_400/0/1716095533736?e=1723680000&v=beta&t=3KZfr2ELE76FCFvV60lrPbcZJMyk3TV31LaCiBIAOA8",
    id: "Weichen Tie",
    position: "IT Director",
    linkedIn: "https://www.linkedin.com/in/weichentie/",
  },
  {
    src: "/images/profiles/unknown.jpg",
    id: "Chris Schmooel",
    position: "Marketing Director",
    linkedIn: "",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQFJUkdDbEHQvg/profile-displayphoto-shrink_400_400/0/1713417590933?e=1723680000&v=beta&t=bgnFkTMXHp4X1glPl8FXNdQXQxt3rhE324DNPF9WInM",
    id: "Kurumi Nagaoka",
    position: "Marketing Director",
    linkedIn:
      "https://www.linkedin.com/in/kurumi-nagaoka-8b5139267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQEfkIdLQ34JOg/profile-displayphoto-shrink_800_800/0/1718537817653?e=1724284800&v=beta&t=0xbzcOzq1E6z055vkTqLYWWGylOeU_fXqh_3K2PuNtk",
    id: "Bhavi Chauhan",
    position: "Projects Director",
    linkedIn: "https://www.linkedin.com/in/bhavichauhan/",
  },
  {
    src: "/images/profiles/unknown.jpg",
    id: "Ram Ganesh",
    position: "Projects Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/unknown.jpg",
    id: "Jeffery Zhu",
    position: "Socials Director",
    linkedIn: "https://www.linkedin.com/in/jeffrey-zhu37/",
  },
  {
    src: "/images/profiles/unknown.jpg",
    id: "Michael Dawson",
    position: "Socials Director",
    linkedIn: "https://www.linkedin.com/in/michael-dawson-14740b26a/",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQFSgWNVSYysLQ/profile-displayphoto-shrink_400_400/0/1688438643694?e=1723680000&v=beta&t=1xO8IUlzFnNxm1qlBI2L8ArEkhKCm_HYohMftgS4Lko",
    id: "Elsa Doan",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/elsa-doan-7a2bb4264/",
  },
  {
    src: "https://media.licdn.com/dms/image/D5603AQEWbdM01lwrjg/profile-displayphoto-shrink_400_400/0/1688438150560?e=1723680000&v=beta&t=gEypfa5l0srSb7ZCpUiaHEcYnrPjn8P_VbM7QOrBc_s",
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
