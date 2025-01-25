import "./App.css";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Loading from "./components/common/Loading";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SideNavbar from "./components/common/SideNavbar";
// import TestLayoutPage from './pages/TestLayoutPage';

export default function App() {
  const location = useLocation();
  const hideFooterPaths = ["/join", "/login"];
  const hideSideNavbarPaths = ["/join", "/login"];

  const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  const shouldHideSideNavbar = hideSideNavbarPaths.includes(location.pathname);

  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-300 dark:bg-gray-800">
        <Header />
        {!shouldHideSideNavbar && <SideNavbar />}
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            {/* <TestLayoutPage/> */}
            <AppRoutes />
          </Suspense>
        </main>
        {!shouldHideFooter && <Footer />} {/* 조건부로 Footer 렌더링 */}
      </div>
    </RecoilRoot>
  );
}
