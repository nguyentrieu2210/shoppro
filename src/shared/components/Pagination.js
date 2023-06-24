import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pagination = ({pages}) => {
    const {total, currentPage, limit, next, prev, hasNext, hasPrev } = pages;
    const totalPages = Math.ceil(total/limit);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const formatURL = (page) => {
        return `${location.pathname}?keyword=${searchParams.get("keyword")}&page=${page}`;
    }
    const renderPagesHTML = (delta=2) => {
        const pages = [];
        const left = currentPage - delta ;
        const right = currentPage + delta ;

        for(let i = 1; i<=totalPages; i++) {
            if(
                i===1 ||
                i===totalPages ||
                i===currentPage ||
                (i>=left) && (i<=right)
            ){
                pages.push(i);
            }
        }
        return pages;
    }
    return (
        <ul className="pagination">
            {
                hasPrev?<li className="page-item"><Link className="page-link" to={formatURL(prev)}>Trang trước</Link></li>:null
            }
        {
            renderPagesHTML().map((page)=>
            <li className={`page-item ${currentPage===page? "active":""}`}><Link className="page-link" to={formatURL(page)}>{page}</Link></li>
            )
        }
        {
            hasNext?<li className="page-item"><Link className="page-link" to={formatURL(next)}>Trang sau</Link></li>:null
        }
    </ul>
    )
}
export default Pagination;