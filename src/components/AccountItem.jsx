import { Link } from "react-router";

export default function AccountItem(){

    return(
        <li>
            <div>
                <Link to="/edit">수정</Link>
                <button>삭제</button>
                <p>편의점</p>
            </div>
            <span>5,000원</span>
        </li>
    );
}