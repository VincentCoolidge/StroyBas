import { Routes, Route, Navigate } from "react-router-dom";
import { MainAsync } from "./Main/Main.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Suspense>
        <Routes>
          <Route path={"/"} element={<MainAsync />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
