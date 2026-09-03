import { ImageResponse } from "next/og";

export const alt =
  "Demure Design. Printables for quiet time, planning, and little hands.";
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
          background: "#F7F3EC",
          color: "#1F2A2E",
          fontFamily: "ui-sans-serif, Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 360,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 180,
              height: 180,
              borderRadius: 999,
              background: "#F5C518",
              position: "absolute",
              left: 48,
              bottom: 80,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 110,
              height: 110,
              borderRadius: 999,
              background: "#3D6B4F",
              position: "absolute",
              left: 160,
              top: 120,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 90,
              height: 160,
              borderRadius: 999,
              background: "#E8B4B8",
              position: "absolute",
              left: 20,
              top: 90,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 80px 80px 24px",
            width: 840,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#3F8DA5",
              marginBottom: 20,
            }}
          >
            Calm by design
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 720,
            }}
          >
            Printables for quiet time, planning, and little hands
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              color: "#5C6A70",
            }}
          >
            Instant download. Nothing ships.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
