import { Link } from "react-router";

export default function AccountHeader(){

    return(
        <div>
            <h1>MY WALLET</h1>
            <Link to="/write">추가</Link>
            <div>
                <h3>나의 소비 기록</h3>
                <ul>
                    <li>
                        <p>소비건수</p>
                        <strong>12</strong>
                    </li>
                    <li>
                        <p>소비금액</p>
                        <strong>50,000</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}