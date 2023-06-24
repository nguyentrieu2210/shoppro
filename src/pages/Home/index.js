import { getProducts } from "../../services/Api";
import React, { useEffect, useState } from "react";
import ProductItem from "../../shared/components/Product-item";
const Home = () => {
    const [latestProduct, setLatestProduct] = React.useState([]);
    const [featureProduct, setFeatureProduct] = React.useState([]);
    //DidMount
    useEffect(() => {
        getProducts({
            params: {
                limit:6,
                "filter[is_featured]":true,
            }
        }).then(({data}) => setFeatureProduct(data.data.docs));
        getProducts({
            params: {
                limit: 6,
            }
        }).then(({ data }) => setLatestProduct(data.data.docs));
    }, []);
    return (
        <>
            {/*	Feature Product	*/}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {
                        featureProduct.map((value)=>
                            <ProductItem item={value}/>
                        )
                    }
                </div>
            </div>
            {/*	End Feature Product	*/}
            {/*	Latest Product	*/}
            <div className="products">
                <h3>Sản phẩm mới</h3>
                <div className="product-list card-deck">
                    {
                        latestProduct.map((value) => 
                            <ProductItem item={value}/>
                        )
                    }
                </div>
            </div>
            {/*	End Latest Product	*/}
        </>
    )
}
export default Home;