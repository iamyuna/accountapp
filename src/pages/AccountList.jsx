import AccountHeader from "../components/AccountHeader";
import AccountItems from "../components/AccountItems";
import AccountSearch from "../components/AccountSearch";
import AccountSort from "../components/AccountSort";

export default function AccountList(){

    return(
        <div>
            <AccountHeader/>
            <AccountSort/>
            <AccountSearch/>
            <AccountItems/>
        </div>
    );
}