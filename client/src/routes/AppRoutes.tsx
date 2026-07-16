import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import UploadMeetingPage from "../pages/UploadMeetingPage";
import MeetingDetailsPage from "../pages/MeetingDetailsPage";
import DashboardPage from "../pages/DashboardPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<ProtectedRoute> <UploadMeetingPage /> </ProtectedRoute>} />
        <Route path="/meetings/:id" element={<ProtectedRoute><MeetingDetailsPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}




export default AppRoutes;