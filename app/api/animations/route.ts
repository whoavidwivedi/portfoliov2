import { readdirSync, readFileSync } from "fs"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file")

  if (file) {
    const content = readFileSync(`animations/${file}`, "utf-8")
    return new Response(content, {
      headers: { "Content-Type": "application/json" },
    })
  }

  const files = readdirSync("animations").filter(
    (f) => f.endsWith(".json"),
  )

  return Response.json(files)
}
