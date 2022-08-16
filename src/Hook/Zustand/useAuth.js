import create from 'zustand';

const initialState = {
  jwt: null,
  user: null,
};

export const useAuth = create((set) => ({
  auth: initialState,
  login: (data) =>
    set(() => ({
      auth: data,
    })),
  logout: (auth) =>
    set(() => ({
      auth,
    })),
}));
