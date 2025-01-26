import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import {autoFallingState} from  '../../../recoil/atoms/challenge/starState';
import TestFinishButton from './TestFinishButton';

export default function ProgressDashboard() {
  const [isAutoFalling, setIsAutoFalling] = useRecoilState(autoFallingState); // on off 버튼

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-gray-100 rounded-3xl pt-4 pb-2 w-80 shadow-lg z-50">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col  items-center mb-4 uppercase text-3xl">
          <h1>your challenge</h1>
          <h2>progress</h2>
        </div>

        <div className="relative flex justify-center items-center ">
          <h2 className="absolute top-[35px] ">3h 20m</h2>
          <p className="absolute top-[65px] ">SUCCESS</p>
          <svg className="w-[120px] h-[120px] mb-3">
            <circle className="stroke-my-blue-1 stroke-[10px] fill-none" cx="60" cy="60" r="55" />
            <motion.circle
              className="stroke-my-blue-4 hover:stroke-hmy-blue-4 stroke-[11px] fill-none "
              cx="60" // 중심좌표
              cy="60" // 중심좌표
              r="55" // 반지름
              transform="rotate(-90 60 60)"
              stroke-linecap="round"
              initial={{ strokeDasharray: "345.7 345.7", strokeDashoffset: 345.7 }} // 345.7은 2파이r 수치값이라 고정
              animate={{ strokeDashoffset: 345.7 * (1 - 0.6) }} // 오늘할일 60% 완료 
              transition={{ duration: 1.5, ease: "easeOut" }} // 1.5초동안 , 시작은빠르게 끝은부드럽게게
            />
          </svg>
        </div>
        <div className="flex justify-start w-full px-14">
        <button 
            className={`px-1 py-0.3  text-white rounded text-sm
              ${isAutoFalling ? 'bg-my-red hover:bg-hmy-red' : 'bg-my-blue-4 hover:bg-hmy-blue-4' }`}
            onClick={() => setIsAutoFalling(!isAutoFalling)}
          >
            {isAutoFalling  ? 'off' : 'on'}
        </button>
        </div>
        <TestFinishButton/>
      </div>
    </div>
  );
};
