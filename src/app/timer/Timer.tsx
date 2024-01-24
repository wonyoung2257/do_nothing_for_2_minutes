"use client";

import { useEffect, useState } from "react";

function Modal() {
  const [isSharing, setIsSharing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "성공 메시지",
          text: "2분간의 휴식을 즐겼어요!",
          url: window.location.href,
        })
        .then(() => {
          setIsSharing(true);
        })
        .catch((error) => {
          console.error("공유 에러:", error);
          copyUrlToClipboard();
        });
    } else {
      copyUrlToClipboard();
    }
  };

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("복사 에러:", error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-96 min-w-80">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
          // onClick={onClose}
        >
          &times;
        </button>
        <div className="text-left">
          <h2 className="text-2xl font-bold text-green-500">성공!</h2>
          <p className="mt-4 text-lg text-gray-700">
            2분간의 휴식을 즐기셨나요?
            <br />이 짧은 시간이 우리에게 지친 일상에서 위로가 되길 바랍니다.
          </p>
          <button
            className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
              isSharing || isCopied ? "hidden" : ""
            }`}
            onClick={handleShareClick}
          >
            2분의 휴식 공유하기
          </button>
          {isSharing && (
            <p className="text-green-500 mt-2">공유가 완료되었습니다!</p>
          )}
          {isCopied && (
            <p className="text-green-500 mt-2">주소가 복사되었습니다!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Timer() {
  const initialTime = 120; // 2분을 초단위로 계산
  const [time, setTime] = useState(initialTime);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
        setShowModal(true); // 타이머가 0이 되면 모달 표시
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  // 이벤트 리스너 설정
  useEffect(() => {
    const resetTimer = () => {
      setTime(initialTime);
    };

    window.addEventListener("keydown", resetTimer);
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("click", resetTimer);

    return () => {
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);

  // 분과 초로 변환
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center">
      <div className="p-4 text-cyan-400 font-bold rounded-lg text-3xl">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>
      {showModal && <Modal />}
    </div>
  );
}
