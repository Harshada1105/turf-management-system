import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landingpage";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
}

export default App;