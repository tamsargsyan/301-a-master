// authActions.js
export const login = () => {
  return {
    type: "LOGIN",
    // payload: user,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
