import AccountItem from "./AccountItem";

export default function AccountItems({accounts}){
    const grouped = accounts.reduce((acc, item) => {
        if(!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
    }, {});

    const totalPrice = (items) => items.reduce((acc, item) => acc + Number(item.price), 0).toLocaleString();

    return(
        <div>
            {Object.entries(grouped).map(([date, items]) => (
                <div key={date}>
                    <div>
                        <span>{date}</span>
                        <span>{totalPrice(items)}</span>
                    </div>
                    <ul>
                        {items.map((item) => (
                            <AccountItem key={item.id} item={item}/>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}