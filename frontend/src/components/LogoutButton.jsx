// src/components/LogoutButton.jsx
import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3000/auth/sign_out", {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          client: localStorage.getItem("client"),
          uid: localStorage.getItem("uid"),
        },
      });
      localStorage.clear();
      alert("ログアウトしました");
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
