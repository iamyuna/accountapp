import AccountItem from "./AccountItem";

export default function AccountItems({accounts}){
    const grouped = accounts.reduce((acc, item) => {
        if(!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
    }, {});

    const totalPrice = (items) => items.reduce((acc, item) => acc + Number(item.price), 0).toLocaleString();

    return(
        <div className="h-[290px] mt-[20px] overflow-y-scroll">
            {Object.entries(grouped).map(([date, items]) => (
                <div key={date}>
                    <div className="flex justify-between bg-[#EEEEEE] py-[5px] px-[10px] border-[#e1e1e1] border-t-[1px]">
                        <strong className="text-[1rem]">{date}</strong>
                        <span className="text-[0.9rem] text-[#FF2222]">{totalPrice(items)}원</span>
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