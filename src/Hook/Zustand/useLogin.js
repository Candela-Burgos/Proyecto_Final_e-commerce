import create from 'zustand';

export const useLogin = create((set, get) => ({
  login: undefined,
  handleSubmit: () =>
    set((data) => {
      console.log(data);
    }),
  register: () => set(),
}));
