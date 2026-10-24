import Logo from "../assets/logoipsum.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let dobrehaslo = "2137";
    let dobrymail = "admin@wave.pl";

    if (mail.length <= 0) {
      setError("E-mail address is empty.");
    } else if (mail.includes("@") == false || mail.includes(".") == false) {
      setError("Wrong e-mail format.");
    } else if (pass.length <= 0) {
      setError("Password is empty.");
    } else if (pass === dobrehaslo && mail === dobrymail) {
      setError("");
      console.log("Dobre dane");
      navigate("/dashboard");
    } else {
      setError("Wrong e-mail or password.");
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
