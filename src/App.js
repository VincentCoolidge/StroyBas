import { Routes, Route } from "react-router-dom";
import { MainAsync } from "./Main/Main.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
