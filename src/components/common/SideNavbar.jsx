// src/components/common/SideNavbar.jsx
import { motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaFolder, FaAngleDoubleLeft , FaAngleDoubleRight } from "react-icons/fa";
import { FcInspection } from "react-icons/fc";
import { PiShootingStarBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

// 공통 스타일 상수화
const commonStyles = "fixed left-0   dark:bg-gray-800 cursor-grab z-50 bg-my-blue-1 rounded-tr-xl rounded-br-xl";
const buttonStyles = "w-full text-3xl hover:bg-hmy-blue-1 py-4 flex justify-center items-center border-b-2";



// 버튼 컴포넌트
const NavButton = ({ icon, additionalStyles = "", to = null }) => (
  to ? (
    <Link to={to} className={`${buttonStyles} ${additionalStyles}`}>
      {icon}
    </Link>
  ) : (
    <button className={`${buttonStyles} ${additionalStyles}`}>
      {icon}
    </button>
  )
);

export default function SideNavbar() {
  const [isSetup , setIsSetup] = useState(true);
  const [isSmall, setIsSmall] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isExtention, setIsExtention] = useState("top-1/2");
  const [isHideSide, setIsHideSide] = useState(false);


  useEffect(() => {
    console.log('isSetup:', isSetup , 'isSmall:', isSmall);
  }, [isSetup, isSmall]);

  return (
    <>
      <motion.div id="innerSideNavbar" className="fixed left-0 top-1/2"
        animate={{ x: !isHideSide ? -100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className='rounded-tr-xl py-10 px-1 rounded-br-xl bg-my-blue-1 text-white text-xs'
        onClick={() => setIsHideSide(false)}>
          <FaAngleDoubleRight/>
        </button>
      </motion.div>
      <motion.nav 
        id="outerSideNavbar"
        initial={{ y: '-50%' }}
        drag
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{ left: 0, right: window.innerWidth - 96 }}
        onDragStart={() => {
          setIsDragging(true);
          setIsSetup(false);
          setIsSmall(true);
        }}
        onDragEnd={(event, info) => {
          setTimeout(() => {
            setIsDragging(false);
          }, 0);
          
          if (info.point.x < 20 && !isSetup && isSmall) {
            setIsSetup(true);
            setIsSmall(false);
            setIsExtention('top-1/2')
          }
        }}
        animate={{
          width: isSmall ? '3rem' : '4rem',
          height: isSmall ? '3rem' : '21rem',
          x: isHideSide ? -100 : 0
          // transformOrigin: 'bottom'
          // y: isSetup ? '-50%' : 0
          // y : '-50%'
          // originY : 1
          // transformOrigin : "top right"
        }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={(e) => {
          if (isDragging) return;
          if (!isSetup) {
            setIsSmall(false);

            const centerY = window.innerHeight / 2;
            console.log(e.clientY < centerY ? '위쪽' : '아래쪽');
            setIsExtention(e.clientY < centerY);
          }
        }}
        onMouseLeave={() => {
          if (!isSetup) {
            setIsSmall(true);
          }
        }}
        className={`${commonStyles} ${isSetup ? '' : 'rounded-xl '} ${isExtention ? "top-1/2" : "bottom-1/2"} ` }
      >
        <div className={`${isSmall ? 
          'w-full py-2 flex justify-center items-center text-gray-500 text-3xl hover:rounded-xl hover:text-my-yellow transition-all duration-300' : 'hidden'}`}>
          <FaStar />
        </div>
        <div className={`${isSmall ? 'hidden' : 'h-full flex flex-col items-center '}`}>
          <NavButton 
            icon={<FaStar />} 
            additionalStyles={`text-my-yellow rounded-tr-xl hover:rounded-tl-xl cursor-grab ` }
          />
          <NavButton icon={<FcInspection />} additionalStyles='text-white' to="/dashboard"/>
          <NavButton icon={<FaFolder />} additionalStyles='text-white' to="/documents"/>
          <NavButton icon={<PiShootingStarBold />} additionalStyles='text-white' to="/challenge/list"/>
          <div className='hover:bg-hmy-blue-1 w-full rounded-br-xl h-full flex flex-col items-center hover:rounded-bl-xl'>
            <NavButton icon={<CgProfile />} additionalStyles="border-b-0 text-white" to="/mypage"/>
            <button className='text-white'
            onClick={() => setIsHideSide(true)}>
              <FaAngleDoubleLeft />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}