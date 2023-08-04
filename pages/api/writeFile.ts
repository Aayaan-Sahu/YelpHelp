import fs from "fs-extra";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "data", "new_restaurants.txt");
    const { search } = req.body;
    fs.appendFileSync(filePath, search + "\n");
    res.status(200).json({ message: "Data successfully written to file!" });
  } catch (error) {
    console.error("Error writing to file:", error);
    res.status(500).json({ error: "Error writing to file" });
  }
}