import { Link } from "react-router";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountHeader({accounts}){
    const totalCount = accounts.length;
    const totalPrice = accounts.reduce((acc, item) => acc + Number(item.price), 0).toLocaleString();

    return(
        <div>
            <h1>MY WALLET</h1>
            <Link to="/write">추가</Link>
            <div>
                <h3>나의 소비 기록</h3>
                <ul>
                    <li>
                        <p>소비건수</p>
                        <strong>{totalCount}</strong>
                    </li>
                    <li>
                        <p>소비금액</p>
                        <strong>{totalPrice}</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}