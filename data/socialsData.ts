// This file contains all the social media contacts

export type SocialData = {
  name:
    | "Facebook Group"
    | "Facebook Page"
    | "LinkedIn"
    | "Instagram"
    | "General Email"
    | "Industry Email"
    | "Info Email"
    | "OutReach Email"
    | "Technical Email"
    | "Discord";
  /**
   * Display string
   */
  display: string;
  /**
   * Actual url
   */
  url: string;
  logoUrl?: string;
  altText: string;
};

/**
 * This is the **PUBLIC** facebook page for MTRNSoc.
 *
 * I.e., accessible without a facebook account
 */
export const facebookPageData: SocialData = {
  name: "Facebook Page",
  display: "https://www.facebook.com/UNSWMTRNSOC",
  url: "https://www.facebook.com/UNSWMTRNSOC",
  logoUrl: "/logos/facebookLogo.svg",
  altText: "Facebook logo",
};

/**
 * This is the **PRIVATE** facebook group for MTRNSoc.
 *
 * I.e., members need to be verified before seeing the page
 */
export const facebookGroupData: SocialData = {
  name: "Facebook Group",
  display: "https://www.facebook.com/groups/unsw.mechatronics/",
  url: "https://www.facebook.com/groups/unsw.mechatronics/",
  logoUrl: "/logos/facebookLogo.svg",
  altText: "Facebook logo",
};

export const linkedInData: SocialData = {
  name: "LinkedIn",
  display: "https://www.linkedin.com/company/unsw-mechatronics-society/",
  url: "https://www.linkedin.com/company/unsw-mechatronics-society/",
  logoUrl: "/logos/linkedinLogo.svg",
  altText: "LinkedIn logo",
};

export const instagramData: SocialData = {
  name: "Instagram",
  display: "https://www.instagram.com/unswmtrnsoc/",
  url: "https://www.instagram.com/unswmtrnsoc/",
  logoUrl: "/logos/instagramLogo.svg",
  altText: "Instagram logo",
};

export const generalEmailData: SocialData = {
  name: "General Email",
  display: "info@ramsocunsw.org",
  url: "mailto:info@ramsocunsw.org",
  altText: "general email",
};

export const industryEmailData: SocialData = {
  name: "Industry Email",
  display: "industry@ramsocunsw.org",
  url: "mailto:industry@ramsocunsw.org",
  altText: "industry email",
};
export const technicalEmailData: SocialData = {
  name: "Technical Email",
  display: "technical@ramsocunsw.org",
  url: "mailto:technical@ramsocunsw.org",
  altText: "technical email",
};
export const outReachEmailData: SocialData = {
  name: "OutReach Email",
  display: "outreach@ramsocunsw.org",
  url: "mailto:outreach@ramsocunsw.org",
  altText: "outreach email",
};

export const discordData: SocialData = {
  name: "Discord",
  display: "https://discord.gg/4dWMWAjWm9",
  url: "https://discord.gg/4dWMWAjWm9",
  logoUrl: "/logos/discordLogo.svg",
  altText: "Discord logo",
};

export const spArcLink = "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VybQAE";

/**
 * Array of SocialData of Facebook, Instagram, Discord, LinkedIn and Email
 */
const defaultSocialsData: SocialData[] = [
  facebookPageData,
  linkedInData,
  instagramData,
  generalEmailData,
  industryEmailData,
  technicalEmailData,
  outReachEmailData,
  discordData,
];

export default defaultSocialsData;
