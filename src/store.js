import { create } from "zustand";

export const  UseStore = create(
    (set,get) => ({
        emailStore:"",
        setEmailStore:(email) =>{
            set({email})
        }
    })
)