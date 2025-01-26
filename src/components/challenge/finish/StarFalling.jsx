import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import {autoFallingState} from  '../../../recoil/atoms/challenge/starState';
import star1 from "./../../../assets/stars/star1.png";
import star2 from "./../../../assets/stars/star2.png";
import star3 from "./../../../assets/stars/star3.png";
import star4 from "./../../../assets/stars/star4.png";
import star5 from "./../../../assets/stars/star5.png";
import star6 from "./../../../assets/stars/star6.png";
import star7 from "./../../../assets/stars/star7.png";
import star8 from "./../../../assets/stars/star8.png";
import star9 from "./../../../assets/stars/star9.png";
import FinalMotion from "./FinalMotion"

const starImages = [star1, star2, star3, star4, star5, star6, star7, star8, star9]

export default function StarFalling() {
  const [stars, setStars] = useState([]); // 이미지 담는 배열
  const isAutoFalling = useRecoilValue(autoFallingState); // on off 버튼
  // const setIsRunStar = useSetRecoilState(starState);

  const createStar = useCallback(() => {
    const newStar = {
      id: Date.now(), // initial한 id값만듬듬
      x: Math.random() * (window.innerWidth - 32), // 떨어지기 시작하는 위치 랜덤
      image: starImages[Math.floor(Math.random() * starImages.length)], // 이미지 9개중 선택
      rotation: Math.random() < 0.5 ? -360 : 360 // 돌아가는 방향 둘중하나 선택
    };
    setStars(prev => [...prev, newStar]);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isAutoFalling) {
      intervalId = setInterval(createStar, 100); // 얼마나 많이 떨어질지 (인터벌)
    }
    return () => clearInterval(intervalId);
  }, [isAutoFalling, createStar]);

  return (
    <div className="fixed w-full h-screen overflow-hidden z-40">
      
      <FinalMotion />

      {stars.map((star) => (
        <motion.img
          key={star.id} // 기본값값
          src={star.image} // 이미지 newStar함수에서 이미지 생성
          className="absolute w-40 h-40" //별크기
          style={{ left: star.x }}
          initial={{ y: -300, opacity: 0, rotate: 0 }} // 떨어지기 시작하는 높이 및 기본값
          animate={{ 
            y: window.innerHeight,
            opacity: [0, 1, 1],
            // x: [-20, 10, 0],
            rotate: star.rotation,
            transition: { 
              duration: 2, // 2초동안 떨어짐
              ease: "easeIn",
            }
          }}
          onAnimationComplete={() => {
            setStars(prev => prev.filter(s => s.id !== star.id));
          }}
        />
      ))}
    </div>
  );
};