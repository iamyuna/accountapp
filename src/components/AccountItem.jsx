import { Link } from "react-router";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountItem({item}){
    const deleteAccount = useAccountStore(state => state.deleteAccount);

    return(
        <li>
            <div>
                <Link to="/edit">수정</Link>
                <button onClick={() => deleteAccount(item.id)}>삭제</button>
                <p>{item.memo}</p>
            </div>
            <span>{item.price}</span>
        </li>
    );
}