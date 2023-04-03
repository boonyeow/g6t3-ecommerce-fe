import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (data) => {
        set((state) => ({
          token: data["bearer_token"],
        }));
      },
      clearStore: () => {
        set(() => ({
          token,
        }));
      },
    }),
    {
      name: "authStore",
      getStorage: () => localStorage, // specify localStorage as the storage backend
    }
  )
);
