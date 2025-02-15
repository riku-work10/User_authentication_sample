import { useEffect, useState } from "react";

const Mypage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");

    if (!token || !client || !uid) {
      console.log("ログインしていません");
      return;
    }

    fetch("http://localhost:3000/auth/validate_token", {
      method: "GET",
      headers: {
        "access-token": token,
        client: client,
        uid: uid,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.data))
      .catch(() => console.log("認証エラー"));
  }, []);

  return (
    <div>
      <h1>マイページ</h1>
      {user ? <p>ようこそ、{user.email} さん！</p> : <p>ログインしてください</p>}
    </div>
  );
};

export default Mypage;
