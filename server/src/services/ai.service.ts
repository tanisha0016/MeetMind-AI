import { execFile } from "child_process";
import { promisify } from "util";
import path from "path";

const execFileAsync = promisify(execFile);

export const processMeetingAudio = async (audioPath: string) => {
    try {
        // Path to ai/main.py
        const pythonScript = path.join(process.cwd(), "ai", "main.py");

        // Full path of uploaded audio
        const fullAudioPath = path.join(process.cwd(), audioPath);

        const pythonExecutable = path.join(
            process.cwd(),
            ".venv",
            "Scripts",
            "python.exe",
        );

        console.log("Python executable:", pythonExecutable);
console.log("Python script:", pythonScript);

        const { stdout, stderr } = await execFileAsync(
            pythonExecutable,
            [pythonScript, fullAudioPath],
            {
                cwd: process.cwd(),
            },
        );

        if (stderr) {
            console.error(stderr);
        }

        return JSON.parse(stdout);
    } catch (error) {
        console.error("AI Processing Failed:", error);
        throw error;
    }
};