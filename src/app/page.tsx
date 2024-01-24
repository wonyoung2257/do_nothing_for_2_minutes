import Image from "next/image";
import { Timer } from "./timer/Timer";

export default function Home() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://wonyoung2257.github.io/do_nothing_for_2_minutes"
      : "";

  return (
    <div className="relative w-full h-screen">
      <Image
        src={`/bg.png`}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
        <p className="text-white text-2xl font-bold">
          2분 동안 아무것도 하지마!!!
        </p>
        <Timer />
      </div>
    </div>
  );
}
