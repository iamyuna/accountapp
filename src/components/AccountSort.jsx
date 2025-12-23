export default function AccountSort({sortList, toggleSort}){

    return(
        <button onClick={toggleSort}>
            {sortList === "newest" ? "최신순" : "오래된순"}
        </button>
    );
}