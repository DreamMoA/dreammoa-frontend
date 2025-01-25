// src/components/common/SocialLoginButton.jsx
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { RiKakaoTalkFill } from "react-icons/ri";
import PropTypes from 'prop-types'

const providerIcons = {
  google: FcGoogle,
  naver: SiNaver,
  kakao: RiKakaoTalkFill,
}

const iconColors = {
  kakao: 'text-black bg-[#FEE500]',  // 카카오톡 아이콘 색상
  naver: 'text-white bg-[#03C75A]',
}

const providerColors = {
  google: 'bg-white hover:bg-gray-100',
  naver: 'bg-white hover:bg-gray-100',
  kakao : 'bg-white hover:bg-gray-100'
}
const outerColors = {
  google : 'bg-white',
  naver : 'bg-[#03C75A]',
  kakao : 'bg-[#FEE500]',
}

const iconSizes = {
  google: 'scale-110',  
  naver: 'scale-75',   
  kakao: 'scale-110',  
}

const SocialLoginButton = ({ provider, onClick, disabled }) => {
  const Icon = providerIcons[provider]
  const buttonColor = providerColors[provider]
  const iconColor = iconColors[provider] || ''
  const outerColor = outerColors[provider] || ''
  const iconSize = iconSizes[provider] || 'scale-100' // 기본값 100%
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex items-center
        w-full py-2.5 px-4 
        rounded-lg shadow-md
        transition-colors duration-200
        ${buttonColor}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        border border-gray-200
      `}
    >
      <span className={`
        absolute left-4 aspect-square h-6 ${outerColor}
        rounded-full overflow-hidden flex items-center justify-center p-1`}>
        {/* w-full h-full: 부모 컨테이너의 크기에 맞춤 */}
        <Icon className={`w-full h-full transform ${iconSize} ${iconColor}`} />
      </span>

      <span className="flex-1 text-center text-sm text-gray-500 hover:text-gray-700">
        Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
      </span>
    </button>
  )
}

SocialLoginButton.propTypes = {
  provider: PropTypes.oneOf(['google', 'naver','kakao']).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default SocialLoginButton