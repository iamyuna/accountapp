import { create } from "zustand";
import { loadStorage, saveStorage } from "../utils/storage";

const STORAGE_KEY =  "account_storage";

export const useAccountStore = create((set, get) => {
    return {
        accounts: loadStorage(STORAGE_KEY),
        addAccount: (account) => {
            const nextState = [...get().accounts, account];
            saveStorage(STORAGE_KEY, nextState);
            set({accounts: nextState});
        },
        deleteAccount: (id) => {
            const nextState = get().accounts.filter(item => item.id !== id);
            saveStorage(STORAGE_KEY, nextState);
            set({accounts: nextState});
        },
    };
});