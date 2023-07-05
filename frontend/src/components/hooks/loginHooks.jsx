import baseAxios from "../hooks/axios";

// ログイン用のカスタムフック
export async function LoginHook(userData) {
  const response = await baseAxios.post("sign_in", { user: userData });
  console.log(response);
}
