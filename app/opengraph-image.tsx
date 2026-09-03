import { ImageResponse } from "next/og";

export const alt = "Demure Design — printables for quiet time and planning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f6f1e8",
          color: "#2c2622",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#55634e",
            marginBottom: 24,
          }}
        >
          Calm by design
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Printables for quiet time and planning
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#6b625a" }}>
          Demure Design
        </div>
      </div>
    ),
    { ...size },
  );
}
