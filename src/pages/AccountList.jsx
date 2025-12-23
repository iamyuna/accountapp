import AccountHeader from "../components/AccountHeader";
import AccountItems from "../components/AccountItems";
import AccountSearch from "../components/AccountSearch";
import AccountSort from "../components/AccountSort";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountList(){
    const accounts = useAccountStore(state => state.accounts);

    return(
        <div>
            <AccountHeader accounts={accounts}/>
            <AccountSort/>
            <AccountSearch/>
            <AccountItems accounts={accounts}/>
        </div>
    );
}