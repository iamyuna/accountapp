import { Link, useNavigate, useParams } from "react-router";
import { useAccountStore } from "../store/useAccountStore";
import { useEffect, useMemo, useState } from "react";

export default function AccountForm(){
    const navigate = useNavigate();
    const {id} = useParams();

    const accounts = useAccountStore(state => state.accounts);
    const addAccount = useAccountStore(state => state.addAccount);
    const updateAccount = useAccountStore(state => state.updateAccount);

    const [editId, setEditId] = useState(null);

    const target = useMemo(() => {
        return accounts.find(item => item.id === Number(id));
    }, [accounts, id]);

    const [form, setForm] = useState({
        date: "",
        price: "",
        memo: "",
        etc: "",
    });

    useEffect(() => {
        if(!target) return;

        setForm({
            date: target.date,
            price: target.price,
            memo: target.memo,
            etc: target.etc,
        });
    }, [target]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const accountData = {
            id: target ? target.id : Date.now(),
            ...form,
            price: Number(form.price),
        }

        if(target){
            updateAccount(accountData) 
        }else {
            addAccount(accountData);
        }

        navigate("/");
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };


    return(
        <form onSubmit={handleSubmit} className="px-[20px] pb-[20px]">
            <div className="flex items-end">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">날짜</label>
                <input 
                    type="date" 
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <div className="flex items-end mt-[10px]">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">금액</label>
                <input 
                    type="number" 
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <div className="flex items-end mt-[10px]">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">내용</label>
                <input 
                    type="text" 
                    name="memo"
                    value={form.memo}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <div className="flex items-end mt-[10px]">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">비고</label>
                <input 
                    type="text" 
                    name="etc"
                    value={form.etc}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <button type="submit" className="block w-full text-white bg-[#B0A5FF] rounded-[5px] py-[10px] mt-[110px]">저장</button>
            <Link to="/" className="block w-full text-center bg-[#dddddd] rounded-[5px] py-[10px] mt-[10px]">취소</Link>
        </form>
    );
}