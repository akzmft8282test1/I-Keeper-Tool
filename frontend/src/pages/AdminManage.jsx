import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function AdminManage() {
  const [admins, setAdmins] = useState([]);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const load = async () => {
    const res = await api.get("/admins");
    setAdmins(res.data);
  };

  useEffect(() => { load(); }, []);

  const create = async () => {
    await api.post("/admins", { username: id, password: pw });
    setId(""); setPw("");
    load();
  };

  const remove = async (id) => {
    await api.delete(`/admins/${id}`);
    load();
  };

  return (
    <>
      <h2>관리자 관리</h2>

      <input placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
      <input placeholder="PW" value={pw} onChange={e => setPw(e.target.value)} />
      <button onClick={create}>관리자 추가</button>

      <ul>
        {admins.map(a => (
          <li key={a.id}>
            {a.username}
            <button onClick={() => remove(a.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
