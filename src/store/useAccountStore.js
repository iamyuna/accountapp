import { create } from "zustand";
import { loadStorage, saveStorage } from "../utils/storage";

const STORAGE_KEY =  "account_storage";

export const useAccountStore = create((set, get) => {
    const sync = (next) => {
        saveStorage(STORAGE_KEY, next);
        set({accounts: next});
    };
    return {
        accounts: loadStorage(STORAGE_KEY),
        addAccount: (account) => {
            const next = [...get().accounts, account];
            sync(next);
        },
        deleteAccount: (id) => {
            const next = get().accounts.filter(item => item.id !== id);
            sync(next);
        },
        updateAccount: (updateItem) => {
            const next = get().accounts.map((item) => 
                item.id === updateItem.id 
                ? {...item, ...updateItem} 
                : item
            );
            sync(next);
        },
    };
});