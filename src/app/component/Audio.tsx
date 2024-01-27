"use client";

import AudioPlayer from "react-audio-player";

export const Audio = () => {
  return (
    <AudioPlayer
      src="/Remembering.mp3" // 음악 파일 경로
      autoPlay={true}
      controls // 오디오 컨트롤 표시
      loop // 반복 재생
    />
  );
};
