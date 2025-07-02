import { promises as fs } from "fs";
import path from "path";
import { exec } from "child_process";
import { tmpdir } from "os";

function execCommand(command: string, options: { cwd: string }): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        resolve({ stdout, stderr: stderr || error.message });
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

export async function executeJavaCode(javaCode: string): Promise<{
  compileOutput: string;
  compileError: string;
  runOutput: string;
  runError: string;
}> {
  // Create a temporary directory for this execution
  const tempDir = await fs.mkdtemp(path.join(tmpdir(), "java-exec-"));

  // Define file paths
  const javaFileName = "Main.java";
  const javaFilePath = path.join(tempDir, javaFileName);

  // Write the Java code to the file
  await fs.writeFile(javaFilePath, javaCode);

  // Compile the Java code
  const compileResult = await execCommand(`javac ${javaFileName}`, { cwd: tempDir });

  if (compileResult.stderr) {
    // Compilation error, return immediately
    return {
      compileOutput: compileResult.stdout,
      compileError: compileResult.stderr,
      runOutput: "",
      runError: "",
    };
  }

  // Run the compiled Java class
  const runResult = await execCommand(`java Main`, { cwd: tempDir });

  // Clean up temp directory - optional, can be added later if needed

  return {
    compileOutput: compileResult.stdout,
    compileError: compileResult.stderr,
    runOutput: runResult.stdout,
    runError: runResult.stderr,
  };
}
