import { useState } from "react";
import { api, setToken } from "../api/api";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", {
        username: id,
        password: pw
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      location.href = "/dashboard";
    } catch {
      alert("로그인 실패");
    }
  };

  return (
    <>
      <h2>I-Keeper Tool 관리자 로그인</h2>
      <input placeholder="ID" onChange={e => setId(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPw(e.target.value)} />
      <button onClick={submit}>로그인</button>
    </>
  );
}
