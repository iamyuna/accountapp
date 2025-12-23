import { useMemo, useState } from "react";
import AccountHeader from "../components/AccountHeader";
import AccountItems from "../components/AccountItems";
import AccountSearch from "../components/AccountSearch";
import AccountSort from "../components/AccountSort";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountList(){
    const accounts = useAccountStore(state => state.accounts);

    const [keyword, setKeyword] = useState("");
    const [sortList, setSortList] = useState("newest");

    const filteredAccounts = useMemo(() => {
        return accounts
            .filter((item) => 
                item.memo.toLowerCase().includes(keyword.toLowerCase())
            )
            .sort((a,b) => {
                return sortList === "newest"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
            });
    }, [accounts, keyword, sortList]);

    const toggleSort = () => {
        setSortList(prev => prev === "newest" ? "oldest" : "newest");
    };

    return(
        <div>
            <AccountHeader accounts={accounts}/>
            {accounts.length === 0 ? (
                <p>등록된 항목이 없습니다.</p>
            ) : (
                <div>
                    <AccountSort sortList={sortList} toggleSort={toggleSort}/>
                    <AccountSearch keyword={keyword} setKeyword={setKeyword}/>
                    <AccountItems accounts={filteredAccounts}/>
                </div>
            )}
        </div>
    );
}