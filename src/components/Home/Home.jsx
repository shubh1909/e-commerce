import { useContext, useEffect } from "react";
import { Context } from "../../utils/Context";
import { fetchDataFromApi } from "../../utils/api";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
const Home = () => {
    
    // eslint-disable-next-line
    const { categories, setCategories, products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);


    const getProducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((res) =>{
            console.log(res);
            setProducts(res);

        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products products={products} headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
