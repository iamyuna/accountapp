export default function AccountSearch({keyword, setKeyword}){

    return(
        <input 
            type="text" 
            placeholder="검색어를 입력해주세요."
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
        />
    );
}