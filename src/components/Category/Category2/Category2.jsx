import React from "react";
import "../../Products/Products";
import Products from "../../Products/Products";
import "./Category2.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Category2 = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category2;