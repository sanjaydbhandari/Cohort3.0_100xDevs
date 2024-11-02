import { useRef } from "react";

export default function FormComponent() {
  const inputRef = useRef("");

  function submit() {
    !inputRef.current.value && inputRef.current.focus();
  }
  return (
    <div
      className="FormComponent"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>Signup</h1>
      <input type="text" ref={inputRef} placeholder="username" />
      <input type="password" placeholder="password" />
      <button type="submit" onClick={submit}>
        Signup
      </button>
    </div>
  );
}
