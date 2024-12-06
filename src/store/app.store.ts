import { create } from 'zustand';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseconfig';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => {
  // Listen to the auth state and update the store when the user changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set({ user });
    } else {
      set({ user: null });
    }
  });

  return {
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  };
});
