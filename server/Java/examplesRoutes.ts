import express from "express";
import path from "path";
import fs from "fs/promises";

const router = express.Router();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const examplesDir = path.join(__dirname, "examples");

// List all example files
router.get("/list", async (_req, res) => {
  try {
    const files = await fs.readdir(examplesDir);
    // Return only .txt files without extension
    const exampleNames = files
      .filter((file) => file.endsWith(".txt"))
      .map((file) => file.slice(0, -4));
    res.json({ examples: exampleNames });
  } catch (error) {
    res.status(500).json({ error: "Failed to list example files" });
  }
});

// Get content of a specific example file by name
router.get("/:name", async (req, res) => {
  const name = req.params.name;
  const filePath = path.join(examplesDir, `${name}.txt`);
  try {
    const content = await fs.readFile(filePath, "utf-8");
    res.json({ name, content });
  } catch (error) {
    res.status(404).json({ error: "Example not found" });
  }
});

export default router;
