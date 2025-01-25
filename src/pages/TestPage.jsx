import Counter from "../components/test/Counter";
import CounterList from "../components/test/CounterList";
import { getTestImage } from "../utils/get-test-image";
import { useNavigate  } from 'react-router-dom';
import { authState } from "../recoil/atoms/authState";
import ToggleButton from "../components/common/ToggleButton";
import VolumeControl from "../components/common/VolumeControl";
import getUserApi from "../services/api/getUserApi";

export default function TestPage() {
  const nav = useNavigate();

  const onClickMyButton = () => {
    nav("/new");
  }

  return (
    <>
    <h1 className="text-4xl">TestPage</h1>
    <hr />
    <h3 className="text-2xl">1. recoil 테스트</h3>
    <Counter/>
    <hr />
    <h3 className="text-2xl">2. recoil + LocalStorage 테스트</h3>
    <p>새로고침시 값 유지</p>
    <CounterList/>
    <hr />
    <h3 className="text-2xl">3. 정적 이미지 로딩 테스트</h3>
    <div className="flex">
      <img src={getTestImage(1)}/>
      <img src={getTestImage(2)}/>
    </div>
    <hr />
    <h3 className="text-2xl">공통컴포넌트 테스트</h3>
    <div>
      <ToggleButton onToggle={(state) => console.log("ok!",state)}/>
    </div>
    <div>
      <VolumeControl onChange={(value) => console.log('Volume:', value)}/>
    </div>
    <hr />
    <h3 className="text-2xl">5. navigater 테스트</h3>
    <div className="flex justify-center m-5 border">
    <button onClick={onClickMyButton}>new페이지 이동버튼</button>
    </div>
    <hr />
    <h3 className="text-2xl">4. 다크모드 테스트</h3>
    <div>{authState.isAuthenticated ? "존재" : "없음"}</div>
    <div>{authState.accessToken ? "존재" : "없음"}</div>
    <div className="border bg-gray-200  dark:bg-gray-700 text-gray-700 dark:text-red-400">
      check
    </div>
    <button onClick={() => getUserApi.getUserInfo()}>
      gogogo
    </button>
    </>
  );
};
