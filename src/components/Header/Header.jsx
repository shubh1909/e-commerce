import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import Cart from "../Cart/Cart";
import "./Header.scss";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/Context";
const Header = () => {
  const {cartCount} = useContext(Context);
  const navigate = useNavigate();
  const[scrolled, setScrolled]=useState(false); //sticky header
  const[showCart,setShowCart]=useState(false); //show cart functionality
  const[showSearch,setShowSearch]=useState(false); //search functionality state
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset>200) {
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <header className={`main-header  ${scrolled ? "sticky-header": ""}`}>
      <div className="header-content">
        <ul className="left">
          <li onClick={()=>navigate("/")}>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center" onClick={()=>navigate("/")}>KALAKAAR</div>
        <div className="right">
          <TbSearch onClick={()=>setShowSearch(true)} />
          <span className="cart-icon">
            <CgShoppingCart  onClick={()=>setShowCart(true)}/>
            {!!cartCount &&<span>{cartCount}</span>}
          </span>

          <AiOutlineHeart />
        </div>
      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
