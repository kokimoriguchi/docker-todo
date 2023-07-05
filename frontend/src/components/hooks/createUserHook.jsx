import baseAxios from "../hooks/axios";

// ユーザー登録用のカスタムフック
export async function createUserHook(userData) {
  const response = await baseAxios.post("users", { user: userData });
  console.log(response);
}
