import prod1 from "../../../assets/products/earbuds-prod-1.webp";
import "./Product.scss";
const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod1} alt="prod1" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">&#8377;499/-</span>
            </div>
        </div>
    );
};

export default Product;
