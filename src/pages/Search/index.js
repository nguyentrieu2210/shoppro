import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct, getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/Product-item";
import Pagination from "../../shared/components/Pagination";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [pages, setPages] = React.useState({
        limit: 12,
    });
    const [products, setProducts] = React.useState([]);
    const keyword = searchParams.get("keyword");
    const page = searchParams.get("page") || 1; 
    //Nếu có thì hiển thị ngược lại hiện thị trang đầu tiên (mặc định)
    //Didmount
    useEffect(()=> {
        getProducts({
            params: {
                name: searchParams.get("keyword"),
                limit:12,
                page:page,
            }
        }).then(({data})=> {
            setProducts(data.data.docs);
            setPages({...pages, ...data.data.pages});
        })
    },[keyword, page]);
    return (
        <>
            <div>
                {/*	List Product	*/}
                <div className="products">
                    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{keyword}</span></div>
                    <div className="product-list card-deck">
                        {
                            products.map((value)=>
                            <ProductItem item = {value}/>
                            )
                        }
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <Pagination pages = {pages}/>
                </div>
            </div>

        </>
    )
}
export default Search;