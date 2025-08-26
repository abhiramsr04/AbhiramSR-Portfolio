import { ImageResponse } from "next/og";

// Tell Next.js to use Edge runtime
export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom right, #0f172a, #000)",
          color: "white",
          fontSize: 60,
          fontWeight: "bold",
        }}
      >
        🚀 Abhiram S R&apos;s Portfolio
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
