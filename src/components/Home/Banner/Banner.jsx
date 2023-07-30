import BannerImg from "../../../assets/banner-img.png";
import "./Banner.scss";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsum commodi unde quasi blanditiis, </p>
                <div className="ctas">
                    <div className="banner-cta">Read more</div>
                    <div className="cta v2">Shop now</div>
                </div>
            </div>
            <img  className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
