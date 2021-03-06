// Log(in/out) actions
export const login = () => ({ type: 'LOGIN' });
export const logout = () => ({ type: 'LOGOUT' });

// Token actions
export const setToken = (payload) => ({ type: 'SET_TOKEN', payload });
export const deleteToken = () => ({ type: 'DELETE_TOKEN' });

// User actions
export const setUseraname = (payload) => ({ type: 'SET_USERNAME', payload });
export const deleteUser = () => ({ type: 'DELETE_USER' });