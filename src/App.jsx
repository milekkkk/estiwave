import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Offers from "./pages/Offers.jsx";
import NewOffer from "./pages/NewOffer.jsx";
import { Navigate, Routes, Route } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/new" element={<NewOffer />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
