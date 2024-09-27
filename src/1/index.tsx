// Style
import { FunctionComponent, useCallback, useState } from "react";
import "./index.scss";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Input from "./input/Input";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<null | string>(null);
  const validateEmail = useCallback((email: string) => {
    if (!email.match(emailRegex)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    return true;
  }, []);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<null | string>(null);
  const validatePassword = useCallback((password: string) => {
    if (password === "") {
      setPasswordError("Please enter a password");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password must have more than 6 letters or numbers");
      return false;
    }
    return true;
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // If you want to do something with form submit
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (isEmailValid && isPasswordValid)
      alert(`Email: ${email} \nPassword: ${password}`);
  };
  return (
    <div id="task-1">
      <form onSubmit={onSubmit} className="login-form">
        <h2>Login</h2>
        <Input
          id="email"
          name="Email"
          value={email}
          setValue={setEmail}
          error={emailError}
          setError={setEmailError}
          validateInput={validateEmail}
          placeholder="Ex: john.doe@gmail.com"
        />
        <Input
          id="password"
          name="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          setValue={setPassword}
          error={passwordError}
          setError={setPasswordError}
          validateInput={validatePassword}
          icon={showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          handleIconClick={() => setShowPassword((prev) => !prev)}
        />
        <div className="input-wrapper">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Task1;
