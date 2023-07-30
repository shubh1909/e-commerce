import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import "./Header.scss";
const Header = () => {
  const[scrolled, setScrolled]=useState(false);
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
    <header className={`main-header ${scrolled ? "sticky-header": ""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">KALAKAAR</div>
        <div className="right">
          <TbSearch />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>1</span>
          </span>

          <AiOutlineHeart />
        </div>
      </div>
    </header>
  );
};

export default Header;
