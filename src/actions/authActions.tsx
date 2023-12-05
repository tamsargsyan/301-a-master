// authActions.js
export const login = (user: any) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
