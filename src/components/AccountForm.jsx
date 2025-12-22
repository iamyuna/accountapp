import { Link, useNavigate } from "react-router";
import { useAccountStore } from "../store/useAccountStore";
import { useState } from "react";

export default function AccountForm(){
    const addAccount = useAccountStore(state => state.addAccount);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        date: "",
        price: "",
        memo: "",
        etc: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        addAccount({
            ...form,
            id: Date.now(),
        });

        navigate("/");
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>날짜</label>
                <input 
                    type="date" 
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>금액</label>
                <input 
                    type="number" 
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>내용</label>
                <input 
                    type="text" 
                    name="memo"
                    value={form.memo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>비고</label>
                <input 
                    type="text" 
                    name="etc"
                    value={form.etc}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">저장</button>
            <Link to="/">취소</Link>
        </form>
    );
}