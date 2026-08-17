import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default async function Icon() {
  const imagePath = path.join(process.cwd(), "public", "kamrul-islam.png");
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
          background: "transparent",
        }}
      >
        <img
          src={base64Image}
          alt="Kamrul Islam"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
