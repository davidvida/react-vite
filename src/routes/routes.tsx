/*
  /       => HomePage
  /todos  => TodosPage
  /config => COnfigPage
  /profile=> ProfilePage
  /auth   => AuthPage
    /auth/login         => AuthLoginPage
    /auth/register      => AuthRegisterPage
    /auth/resetPassword => AuthResetPasswordPage
*/
import React, { Suspense } from "react";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import LoadingPageIndicator from "@/components/loading-page-indicator/loading-page-indicator.component";

const HomePage = React.lazy(() => import('@/pages/home/home-page'));
const TodosPage = React.lazy(() => import('@/pages/todos/todos-page'));
const ConfigPage = React.lazy(() => import('@/pages/config/config-page'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found/not-found-page'));

const AppRoutes = () => {
  const navigate = useNavigate();

  const handleRedirect = (route: string) => {
    navigate(route);
  }


  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Outlet />
        </div>
        }>
        <Route index element={
          <Suspense fallback={<LoadingPageIndicator label="Loading Home Page..."/>}>
            <HomePage handleRedirect={handleRedirect} />
          </Suspense>
        } />
        <Route path="/todos" element={
          <Suspense fallback={<LoadingPageIndicator label="Loading Todos Page..."/>}>
            <TodosPage />
          </Suspense>
          }
        />
        <Route path="/config" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <ConfigPage />
          </Suspense>
          }
        />
      </Route>
      <Route path="*" element={
        <Suspense fallback={<LoadingPageIndicator />}>
          <NotFoundPage />
        </Suspense>
        }
      />
    </Routes>
  )
};

export default AppRoutes;
