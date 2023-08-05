import React from "react";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                        officia quae quisquam. Atque aspernatur aut odit. Nulla magni
                        voluptatibus deserunt.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Greater Brijeshwari opp. Kalindi Kunj , Piplihana , Indore (M.P.),452016
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 9999999901
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            E-mail: test19@gmail.com
                        </div>
                    </div>

                </div>
                <div className="col">
                    <span className="title">Categories</span>
                    <span className="text">Headphones</span>
                    <span className="text">Smart watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless earbuds</span>
                    <span className="text">Home theaters</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <span className="title">Pages</span>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy </span>
                    <span className="text">Returns</span>
                    <span className="text">Terms and Condition</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Kalakaar 2023 Created by Shubh Jain
                    </div>
                    <img src={Payment} alt="payment modes" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
