import React from "react";
import "../../Products/Products";
import Products from "../../Products/Products";
import "./Category2.scss";

const Category2 = () => {
    return (<div div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                Category Title
            </div>
            <Products innerPage={true} />
        </div>
    </div>);
}

export default Category2;