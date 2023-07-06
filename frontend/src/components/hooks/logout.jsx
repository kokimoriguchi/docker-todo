import baseAxios from "../hooks/axios";

// ログインアウト用のカスタムフック
export async function LoginOutHook() {
  await baseAxios.delete("sign_out");
}
