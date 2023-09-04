import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/watch-prod-3.webp";
import "./Search.scss";
const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search for products" />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="sample img" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="desc">product description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
