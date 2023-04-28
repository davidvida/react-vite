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
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import LoadingPageIndicator from "@/components/loading-page-indicator/loading-page-indicator.component";

const HomePage = React.lazy(() => import('@/pages/home/home-page'));
const TodosPage = React.lazy(() => import('@/pages/todos/todos-page'));
const ConfigPage = React.lazy(() => import('@/pages/config/config-page'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found/not-found-page'));
const AuthPage = React.lazy(() => import('@/pages/auth/auth-page'));
const LoginPage = React.lazy(() => import('@/pages/auth/login/login-page'));
const RegisterPage = React.lazy(() => import('@/pages/auth/register/register-page'));
const ResetPasswordPage = React.lazy(() => import('@/pages/auth/reset-password/reset-password-page'));

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
        <Route path="/todos" element={
          <Suspense fallback={<LoadingPageIndicator />}>
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
        {/* It doesn't work when refreshing the page */}
        <Route path="/auth/*" element={<AuthPage />}> {/* It works without the AuthPage */}
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={
              <Suspense fallback={<LoadingPageIndicator />}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route path="register" element={
              <Suspense fallback={<LoadingPageIndicator />}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route path="resetPassword" element={
              <Suspense fallback={<LoadingPageIndicator />}>
                <ResetPasswordPage />
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
