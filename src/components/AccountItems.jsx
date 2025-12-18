import AccountItem from "./AccountItem";

export default function AccountItems(){

    return(
        <div>
            <div>
                <span>2025-12-15</span>
                <span>5,000원</span>
            </div>
            <ul>
                <AccountItem/>
            </ul>
        </div>
    );
}