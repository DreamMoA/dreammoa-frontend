import { useState } from 'react';
import { motion } from 'framer-motion';
import testlogo from '../../../assets/logo/testlogo.png';
import { useSetRecoilState  } from 'recoil';
import {starState } from  '../../../recoil/atoms/challenge/starState';

const TestFinishButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const setIsRunStar = useSetRecoilState(starState)

  return (
    <>
      {/* <button onClick={() => setIsChecked(false)}>
        강제 되돌리기 버튼
      </button> */}
      <div className="relative flex justify-center items-center ">
        <motion.button
          className="relative border-2 rounded-full text-center 
            w-[260px] h-[60px] text-xl uppercase font-semibold 
            tracking-[2px] cursor-pointer hover:bg-my-blue-2 "
          initial={{ 
            width: '260px',
            x: '0px', 
            color: 'white',
            borderColor: 'white'
          }}
          animate={isChecked ? {
            width: '60px',
            x: '0px',
            color: 'transparent', 
            borderColor: '#88A9D5',
            transition: { duration: 0.5 }
          } : {
            width: '260px',
            x: '0px',
            color: '#88A9D5',
            borderColor: '#88A9D5'
          }}
          onClick={() => {
            setIsChecked(true);   
            setTimeout(() => {
            setIsRunStar(false);
            }, 2300); 
            // delay(1.7초) duration(0.3초) + 우선 1초 
          }} 
        >
          Finish
          <motion.img
            src={testlogo}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 "
            initial={{ opacity: 0 }}
            animate={isChecked ? {
              opacity: 1,
              transition: { delay: 1.5, duration: 0.5 }
            } : { opacity: 0 }}
          />
        </motion.button>

        <svg className="absolute top-1/2 left-1/2 w-[160px] h-[160px] -translate-x-1/2 -translate-y-1/2 
        -rotate-90 pointer-events-none ">
          <motion.circle
            cx="80"
            cy="80"
            r="29"
            
            className="fill-none stroke-my-yellow stroke-[3]"
            initial={{ 
              pathLength: 0,
              scale: 1,
              opacity: 1
            }}
            animate={isChecked ? {
              pathLength: 1.25,
              scale: 2, 
              opacity: 0,
              transition: {
                pathLength: { duration: 1, delay: 0.5 },
                scale: { duration: 0.5, delay: 1.5 },
                opacity: { duration: 0.3, delay: 1.7 }
              }
            } : {
              pathLength: 0,
              scale: 1,
              opacity: 1
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default TestFinishButton;