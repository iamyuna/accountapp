import { create } from "zustand";
import { loadStorage } from "../utils/storage";

const STORAGE_KEY =  "account_storage";

export const useAccountStore = create((set, get) => {
    return {
        accounts: loadStorage(STORAGE_KEY),
    };
});