import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/auth";

//新規登録
export const signUp = async (email, password, passwordConfirmation) => {
  const response = await axios.post(API_URL, {
    email,
    password,
    password_confirmation: passwordConfirmation,
  });

  return response.data;
};

//ログイン
export const signIn = async (email, password) => {
  const response = await axios.post(`${API_URL}/sign_in`, {
    email,
    password,
  });

  // ヘッダーに含まれる認証情報を取得
  const { "access-token": accessToken, client, uid } = response.headers;

  // ローカルストレージに保存
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("client", client);
  localStorage.setItem("uid", uid);

  return response.data;
};

//二回目の認証かな？
export const fetchUserData = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const client = localStorage.getItem("client");
  const uid = localStorage.getItem("uid");

  const response = await axios.get(`${API_URL}/validate_token`, {
    headers: {
      "access-token": accessToken,
      client: client,
      uid: uid,
    },
  });

  return response.data;
};


//ログアウト
export const signOut = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const client = localStorage.getItem("client");
  const uid = localStorage.getItem("uid");

  await axios.delete(`${API_URL}/sign_out`, {
    headers: {
      "access-token": accessToken,
      client: client,
      uid: uid,
    },
  });

  // ローカルストレージをクリア
  localStorage.removeItem("accessToken");
  localStorage.removeItem("client");
  localStorage.removeItem("uid");
};
