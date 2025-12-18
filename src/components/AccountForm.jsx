import { Link } from "react-router";

export default function AccountForm(){

    return(
        <form>
            <div>
                <label>날짜</label>
                <input type="date" />
            </div>
            <div>
                <label>금액</label>
                <input type="number" />
            </div>
            <div>
                <label>내용</label>
                <input type="text" />
            </div>
            <div>
                <label>비고</label>
                <input type="text" />
            </div>
            <button type="submit">저장</button>
            <Link to="/">취소</Link>
        </form>
    );
}