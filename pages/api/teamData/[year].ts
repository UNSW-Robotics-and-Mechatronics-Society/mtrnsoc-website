import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { year } = req.query;

  try {
    const filePath = path.join(process.cwd(), "data", "TeamData", `team${year}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const teamData = JSON.parse(fileContent);

    res.status(200).json(teamData);
  } catch (error) {
    console.error(`Failed to load team data for year ${year}:`, error);
    res.status(500).json({ error: "Failed to load team data" });
  }
}
