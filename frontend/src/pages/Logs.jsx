import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get("/logs").then(res => setLogs(res.data));
  }, []);

  return (
    <>
      <h2>행동 로그</h2>
      <ul>
        {logs.map(l => (
          <li key={l.id}>
            [{l.created_at}] {l.admins.username} → {l.action}
          </li>
        ))}
      </ul>
    </>
  );
}
