import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// 컴포넌트 import
import HomePage from "../pages/HomePage";
import Notfound from "../pages/Notfound";
import Loading from "../components/common/Loading";
import PrivateRoute from "../components/common/PrivateRoute";

import LoginPage from "../pages/User/LoginPage";
import JoinPage from "../pages/User/JoinPage";
import FindidPage from "../pages/User/FindidPage";
import FindpwPage from "../pages/User/FindpwPage";
import DocumentsPage from "../pages/User/DocumentsPage";

const ChallengeListPage = lazy(() => import("../pages/Challenge/ChallengeListPage"));
const ChallengeDetailPage = lazy(() => import("../pages/Challenge/ChallengeDetailPage"));
const ChallengeCreatePage = lazy(() => import("../pages/Challenge/ChallengeCreatePage"));
const ChallengeMeetPage = lazy(() => import("../pages/Challenge/ChallengeMeetPage"));

const CommunityListPage = lazy(() => import("../pages/Community/CommunityListPage"));
const CommunityDetailPage = lazy(() => import("../pages/Community/CommunityDetailPage")); 
const CommunityWritePage = lazy(() => import("../pages/Community/CommunityWritePage"));
const CommunityEditPage = lazy(() => import("../pages/Community/CommunityEditPage"));

const MyPage = lazy(() => import("../pages/User/MyPage"));
const DashBoardPage = lazy(() => import("../pages/User/DashBoardPage"));

const TestPage = lazy(() => import("../pages/TestPage"));

export default function AppRoutes() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<HomePage />} />
      {/* 회원 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/TestPage" element={<TestPage />} />
      <Route path="/mypage" element={<MyPage />} /> {/* /user-Info */}
      <Route path="/findid" element={<FindidPage />} /> {/* 아이디 찾기 */}
      <Route path="/findpw" element={<FindpwPage />} /> {/* 비밀번호 찾기 */}
      <Route path="/dashboard" element={<DashBoardPage />} /> {/*대시보드 */}
      <Route path="/documents" element={<DocumentsPage />} /> {/*나의 문서 */}
      {/* 게시판 */}
      <Route path="/community/list" element={<CommunityListPage />} />
      <Route path="/community/detail/:id" element={<CommunityDetailPage />} />
      <Route path="/community/write" element={<PrivateRoute><CommunityWritePage /></PrivateRoute>} />
      <Route path="/community/edit/:id" element={<CommunityEditPage />} />
      {/* 챌린지 */}
      <Route path="/challenge/list" element={<ChallengeListPage />} />
      <Route path="/challenge/detail/:id" element={<ChallengeDetailPage />} />
      <Route path="/challenge/create" element={<ChallengeCreatePage />} /> {/* 챌린지 만들기 */}
      <Route path="/challenge/meet" element={<ChallengeMeetPage />} /> {/* 챌린지 미팅 */}
      <Route
        path="/loadingtest"
        element={
          <PrivateRoute>
            <Loading />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
