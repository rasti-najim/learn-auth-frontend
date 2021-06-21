import React from "react";

export default function Home({ setIsAuth }) {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => setIsAuth(false)}>Log out</button>
    </>
  );
}
