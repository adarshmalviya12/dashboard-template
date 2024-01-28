import { Suspense, useState } from "react";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import routes from "./routes";
import Loader from "./common";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        {routes.map((routes, index) => {
          const { path, component: Component } = routes;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
