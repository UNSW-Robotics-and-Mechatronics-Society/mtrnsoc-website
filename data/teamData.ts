/* eslint-disable linebreak-style */
import { promises as fs } from "fs";
import path from "path";

export interface TeamData {
  execs: ProfileData[];
  directors: ProfileData[];
  subcoms: SubcomProfileData[];
}

export type ProfileData = {
  profileImg: string;
  name: string;
  role: string;
  linkedIn: string | null;
  email: string;
};

export type SubcomProfileData = {
  portfolio: string;
  members: string[];
};

// Function to load team data for a specific year
export const loadTeamData = async (year: number): Promise<TeamData> => {
  try {
    const filePath = path.join(process.cwd(), "data", "TeamData", `team${year}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading team data for year ${year}:`, error);
    throw new Error(`Failed to load team data for year ${year}`);
  }
};

// Function to get all available years by scanning the data folder
export const getAvailableYearTeamData = async (): Promise<number[]> => {
  try {
    const directoryPath = path.join(process.cwd(), "data", "TeamData");
    const files = await fs.readdir(directoryPath);

    const yearPattern = /^team(\d{4})\.json$/;

    const years = files
      .map((file) => {
        const match = file.match(yearPattern);
        return match ? parseInt(match[1], 10) : null;
      })
      .filter((year): year is number => year !== null)
      .sort((a, b) => a - b);

    return years;
  } catch (error) {
    console.error("Error fetching available years:", error);
    throw new Error("Failed to fetch available years");
  }
};
