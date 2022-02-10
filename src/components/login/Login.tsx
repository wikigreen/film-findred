import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>();
  const [passwordInput, setPasswordInput] = useState<string>();
  const [isFormFocused, setIsFormFocused] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(
      (emailInput ? emailInput!.trim() !== "" : false) &&
        (passwordInput ? passwordInput!.trim() !== "" : false)
    );
  }, [emailInput, passwordInput]);

  const handleFormBlur = () => {
    setIsFormFocused(false);
  };

  const handleFormFocus = () => {
    setIsFormFocused(true);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInput(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/home", { replace: true });
  };

  const emailWarning = !isFormFocused && emailInput?.trim() === "" && (
    <p>Email is not valid</p>
  );
  const passwordWarning = !isFormFocused && passwordInput?.trim() === "" && (
    <p>Password is not valid</p>
  );

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input
          type="email"
          onBlur={handleFormBlur}
          onFocus={handleFormFocus}
          onChange={emailChangeHandler}
        />
        {emailWarning}
        <h1>Password</h1>
        <input
          type="password"
          onBlur={handleFormBlur}
          onFocus={handleFormFocus}
          onChange={passwordChangeHandler}
        />
        {passwordWarning}
        <button type="submit" disabled={!isFormValid}>
          Login!
        </button>
      </form>
    </>
  );
};

export default Login;
