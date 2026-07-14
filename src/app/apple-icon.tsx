import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f472b6 0%, #a855f7 45%, #22d3ee 100%)",
        }}
      >
        <span
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#06070a",
            fontFamily: "sans-serif",
          }}
        >
          YD
        </span>
      </div>
    ),
    { ...size }
  );
}
