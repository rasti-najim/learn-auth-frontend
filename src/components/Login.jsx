import React from "react";

export default function Login({ setIsAuth }) {
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => setIsAuth(true)}>Authenticate</button>
    </>
  );
}
