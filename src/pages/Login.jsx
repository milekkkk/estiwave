import Logo from "../assets/logoipsum.svg";
import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../lib/supabaseClient";

function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (mail.length <= 0) {
      setError("E-mail address is empty.");
      return;
    } else if (mail.includes("@") == false || mail.includes(".") == false) {
      setError("Wrong e-mail format.");
      return;
    } else if (pass.length <= 0) {
      setError("Password is empty.");
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: mail,
      password: pass,
    });
    if (authError) {
      setError("Wrong e-mail or password.");
      return;
    } else {
      setError("");
      navigate("/dashboard");
    }
  }

  return (
    <main>
      <div className="LoginPanel">
        <img
          alt="EstiWave - Quota Management software"
          className="Logo"
          src={Logo}
        />
        <h1 className="simple">Log in</h1>
        <form noValidate className="loginform" onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">
            E-mail address
          </label>
          <input
            value={mail}
            onChange={(event) => {
              setMail(event.target.value);
              setError("");
            }}
            id="email"
            type="email"
            placeholder="E-mail Address*"
          ></input>
          <label htmlFor="pass" className="sr-only">
            Password
          </label>
          <input
            value={pass}
            onChange={(event) => {
              setPass(event.target.value);
              setError("");
            }}
            id="pass"
            type="password"
            placeholder="Password*"
          ></input>
          <button type="submit">Continue</button>
        </form>

        {error && (
          <p id="errorm" className="errormessage">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}

export default Login;
