import { Timer } from "./timer/Timer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2분 명상 ",
  description: "바쁜 일상 속에서 2분동안 아무것도 하지 않고 쉬어보세요.",
  keywords: "명상, 성인 ADHD, ADHD, 휴식",
};

export default function Home() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://wonyoung2257.github.io/do_nothing_for_2_minutes"
      : "";

  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={`${prefix}/bg.png`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* <Audio /> */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
          <p className="text-white text-2xl font-bold">
            2분 동안 아무것도 하지마!
          </p>
          <Timer />
        </div>
        <div className="fixed top-0 left-0 p-4"></div>
      </div>
    </>
  );
}
