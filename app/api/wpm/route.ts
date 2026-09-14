import { NextResponse } from "next/server";

export async function GET() {
  const apeKey = process.env.MONKEYTYPE_APE_KEY;

  if (!apeKey) {
    return NextResponse.json({ error: "No API key configured" }, { status: 500 });
  }

  try {
    const [timeRes, wordsRes] = await Promise.all([
      fetch("https://api.monkeytype.com/users/personalBests?mode=time", {
        headers: { Authorization: `ApeKey ${apeKey}` },
        next: { revalidate: 3600 } // Cache for 1 hour
      }),
      fetch("https://api.monkeytype.com/users/personalBests?mode=words", {
        headers: { Authorization: `ApeKey ${apeKey}` },
        next: { revalidate: 3600 }
      })
    ]);

    if (!timeRes.ok || !wordsRes.ok) {
      throw new Error("Failed to fetch from Monkeytype API");
    }

    const timeData = await timeRes.json();
    const wordsData = await wordsRes.json();

    let maxWpm = 0;

    const extractMaxWpm = (data: any) => {
      if (data?.data) {
        for (const key of Object.keys(data.data)) {
          const records = data.data[key];
          for (const record of records) {
            if (record.wpm > maxWpm) {
              maxWpm = record.wpm;
            }
          }
        }
      }
    };

    extractMaxWpm(timeData);
    extractMaxWpm(wordsData);

    return NextResponse.json({ wpm: Math.floor(maxWpm) });
  } catch (error) {
    console.error("Error fetching WPM:", error);
    return NextResponse.json({ error: "Failed to fetch WPM" }, { status: 500 });
  }
}
