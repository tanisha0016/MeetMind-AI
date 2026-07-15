import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import MeetingDetailsPage from "./pages/MeetingDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import UploadMeetingPage from "./pages/UploadMeetingPage";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/meetings/:id" element={<MeetingDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<UploadMeetingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;