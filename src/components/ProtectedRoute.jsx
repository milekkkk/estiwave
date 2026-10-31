import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { supabase } from "../lib/supabaseClient";

export default function ProtectedRoute() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      setAuth(error ? null : user);
    }

    checkSession();
  }, []);

  if (auth === null) {
    return <Navigate to="/login" replace />;
  }
  if (auth === undefined) {
    return <p>Checking session...</p>;
  }

  return <Outlet />;
}
