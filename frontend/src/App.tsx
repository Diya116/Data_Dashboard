import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from 'sonner'
import Loader from "./components/ui/Loader";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import { StatsProvider } from "./context/StatsContext";
import { useAuth } from "./context/AuthContext";
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const UsersPage = lazy(() => import("./pages/UserPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const DashboardLayout = lazy(() => import("./components/Layout/DashboardLayout"));
const NotFoundPage =lazy(()=>import("./pages/NotFoundPage"));

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        <StatsProvider>
          <Suspense fallback={<Loader />}>
            <Toaster position="top-right" richColors />
            <Routes>
              <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<ProtectedRoutes />}>
               <Route element={<DashboardLayout />}>
               <Route index element={<DashboardPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="settings" element={<SettingsPage />} />
               </Route>
              </Route>
                  <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </StatsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
