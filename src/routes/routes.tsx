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
import { Outlet, Routes, Route } from "react-router-dom";
import LoadingPageIndicator from "@/components/loading-page-indicator/loading-page-indicator.component";

const HomePage = React.lazy(() => import('@/pages/home/home-page'));
const TodosPage = React.lazy(() => import('@/pages/todos/todos-page'));
const ConfigPage = React.lazy(() => import('@/pages/config/config-page'));
const ProfilePage = React.lazy(() => import('@/pages/profile/profile-page'));
const AuthPage = React.lazy(() => import("@/pages/auth/auth-page"));
const AuthLoginPage = React.lazy(() => import('@/pages/login/auth-login-page'));
const AuthRegisterPage = React.lazy(() => import('@/pages/register/auth-register-page'));
const AuthResetPasswordPage = React.lazy(() => import('@/pages/reset-password/auth-reset-password-page'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found/not-found-page'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Outlet />
        </div>
        }>
        <Route index element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <HomePage />
          </Suspense>
        } />
        <Route path="todos" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <TodosPage />
          </Suspense>
          }
        />
        <Route path="config" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <ConfigPage />
          </Suspense>
          }
        />
        <Route path="profile" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <ProfilePage />
          </Suspense>
          }
        />
        <Route path="auth" element={
          <div>
            <Outlet />
          </div>
        }>
          <Route index element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <AuthPage />
            </Suspense>
            } 
            />
          <Route path="login" element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <AuthLoginPage />
            </Suspense>
            }
          />
            <Route path="register" element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <AuthRegisterPage />
            </Suspense>
            }
          />
            <Route path="reset-password" element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <AuthResetPasswordPage />
            </Suspense>
            }
          />
        </Route>
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
