import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";
import ProtectedRoute from "./protectedRoute";
import Loading from "../components/UI/Loading";
import Layout from "../components/Navigation/Layout";


const AppRoutes: React.FC = () => {
  const location = useLocation();
  const excludedRoutes = ["/login", "/register", "/"]; 
  const isExcluded = excludedRoutes.includes(location.pathname);

  return (
    <Suspense fallback={<Loading size={40} overlay={true} />}>
      {isExcluded ? ( 
        <Routes>
         {publicRoutes.map(({ key, path, component: Component }) => (
          <Route key={key} path={path} element={Component} /> )
        )}
        </Routes>
      ) : (
        <Layout>
          <Routes>
            {privateRoutes.map(({ key, path, component: Component, allowedRoles }) => (
              <Route
                key={key}
                path={path}
                element={
                  <ProtectedRoute allowedRoles={allowedRoles}>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Routes>
        </Layout>
      )}
    </Suspense>
  );
};

export default AppRoutes;
