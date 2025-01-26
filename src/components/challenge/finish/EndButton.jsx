import { useState } from 'react';
import { IoCall } from "react-icons/io5";
import StarFalling from './StarFalling';
import { useRecoilState } from 'recoil';
import {starState} from  '../../../recoil/atoms/challenge/starState';


export default function EndButton() {
  const [areYouDone, setAreYouDone] = useState(false);
  const [isRunStar, setIsRunStar] = useRecoilState(starState)
  return (
    <>
      <div id="homebutton" className="fixed z-10 bottom-8 left-1/2 -translate-x-1/2">
        <button 
          className=" rounded-lg  border-4 border-gray-700 bg-gray-700"
          onClick={() => setAreYouDone(!areYouDone)}
          >
          <div className="bg-my-red rounded-md p-2 hover:bg-hmy-red text-gray-700">
            <IoCall />
          </div>
        </button>
      </div>
      <div id="homemodal" className={`
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-white rounded-3xl p-6 w-80 shadow-lg z-50
            ${areYouDone ? '': 'hidden'}
            `}>
        <p className="text-lg mb-8">정말 챌린지를 종료 하실건가요?</p>
        <div className="flex justify-between gap-3">
          <button id="CancelButton"
            className="flex-1 py-2 rounded-lg border border-gray-300"
            onClick={() => setAreYouDone(false)}
            >Cancel
          </button>
          <button id="ContinueButton"
            className="flex-1 py-2 rounded-lg bg-black text-white"
            onClick={() => {setIsRunStar(true); setAreYouDone(false);}}
            >Continue
          </button>
        </div>
      </div>
      {isRunStar && <StarFalling />}
    </>
  );
};
