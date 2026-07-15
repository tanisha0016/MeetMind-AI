import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage  from "../pages/LoginPage";
//import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;