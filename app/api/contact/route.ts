import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Submission = {
  address: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  number: string;
};

const dataDirectory = join(process.cwd(), "data");
const submissionsFile = join(dataDirectory, "submissions.json");

const ensureDataStore = async () => {
  await mkdir(dataDirectory, { recursive: true });

  if (!existsSync(submissionsFile)) {
    await writeFile(submissionsFile, "[]\n", "utf8");
  }
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Submission>;
    const submission: Submission = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      name: String(body.name || "").trim(),
      number: String(body.number || "").trim(),
      email: String(body.email || "").trim(),
      address: String(body.address || "").trim()
    };

    if (!submission.name || !submission.number || !submission.email || !submission.address) {
      return NextResponse.json({ ok: false, message: "All fields are required." }, { status: 400 });
    }

    await ensureDataStore();

    const currentData = JSON.parse(await readFile(submissionsFile, "utf8")) as Submission[];
    currentData.push(submission);
    await writeFile(submissionsFile, `${JSON.stringify(currentData, null, 2)}\n`, "utf8");

    console.log("");
    console.log("New Hire Me submission received:");
    console.log(`- Name: ${submission.name}`);
    console.log(`- Number: ${submission.number}`);
    console.log(`- Email: ${submission.email}`);
    console.log(`- Address: ${submission.address}`);
    console.log("");

    return NextResponse.json({ ok: true, message: "Send successful." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not save your details right now." },
      { status: 500 }
    );
  }
}
