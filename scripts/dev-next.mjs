import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { exec, spawn } from "node:child_process";
import net from "node:net";

const projectRoot = resolve(process.cwd());
const nextBin = join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const requestedPort = Number(process.env.PORT || "3000");
const shouldOpen = process.argv.includes("--open");

const findFreePort = (port) =>
  new Promise((resolvePort) => {
    const server = net.createServer();

    server.once("error", () => {
      resolvePort(findFreePort(port + 1));
    });

    server.once("listening", () => {
      server.close(() => resolvePort(port));
    });

    server.listen(port, "127.0.0.1");
  });

if (!existsSync(nextBin)) {
  console.log("");
  console.log("Next.js is not installed yet.");
  console.log("Run: npm install");
  console.log("");
  process.exit(1);
}

const port = await findFreePort(requestedPort);
const url = `http://127.0.0.1:${port}`;

console.log("");
console.log("Ric Patra site is starting:");
console.log("- Frontend: React + Next.js");
console.log("- Styling: Tailwind CSS + custom motion system");
console.log("- Backend: Next.js API route");
console.log("- Data file: data/submissions.json");
console.log(`- Local URL: ${url}`);
console.log("");

const child = spawn(process.execPath, [nextBin, "dev", "--hostname", "127.0.0.1", "--port", String(port)], {
  cwd: projectRoot,
  stdio: ["inherit", "pipe", "pipe"]
});

let opened = false;
const openBrowser = () => {
  if (opened || !shouldOpen) {
    return;
  }

  opened = true;
  exec(`open -a Safari "${url}"`);
};

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);

  if (text.includes("Ready in") || text.includes("Local:")) {
    openBrowser();
  }
});

child.stderr.on("data", (chunk) => {
  process.stderr.write(chunk.toString());
});

process.on("SIGINT", () => {
  child.kill("SIGINT");
});

process.on("SIGTERM", () => {
  child.kill("SIGTERM");
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
