import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { create } from "zustand";
//DRY PRINCIPLES
export const useAuthStore = create((set) => ({
  authUser: null,
  isAuthenticating: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in check auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data) => {
    set({ isAuthenticating: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      toast.success("Signup successful");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in signup:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthenticating: false });
    }
  },

  signin: async (data) => {
    set({ isAuthenticating: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      toast.success("Signin successful");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in signin:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthenticating: false });
    }
  },
}));
