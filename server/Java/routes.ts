import express from "express";
import { executeJavaCode } from "./executeJava";
import examplesRouter from "./examplesRoutes";

const router = express.Router();

const learningSteps = [
  { id: "step1", title: "Introduction to Java", description: "Learn the basics of Java programming." },
  { id: "step2", title: "Control Structures", description: "Understand loops and conditionals." },
  { id: "step3", title: "Object-Oriented Programming", description: "Learn about classes and objects." },
];

const assignments = [
  "Write a loop to print numbers 1 to 10",
  "Calculate the area of a rectangle",
  "Check if a number is even or odd",
  "Implement an if-else statement",
  "Create a Car class with properties and methods",
];

router.post("/execute", async (req, res) => {
  const javaCode = req.body.code;
  if (typeof javaCode !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'code' in request body" });
  }

  try {
    const result = await executeJavaCode(javaCode);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error instanceof Error ? error.message : String(error) });
  }
});

router.use("/examples", examplesRouter);

router.get("/learning-steps", (_req, res) => {
  res.json(learningSteps);
});

router.get("/assignments", (_req, res) => {
  res.json(assignments);
});

export default router;
