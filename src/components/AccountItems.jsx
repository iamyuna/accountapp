import AccountItem from "./AccountItem";

export default function AccountItems({accounts}){

    return(
        <div>
            <div>
                <span>2025-12-15</span>
                <span>5,000원</span>
            </div>
            <ul>
                {accounts.map((item) => (
                    <AccountItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
}