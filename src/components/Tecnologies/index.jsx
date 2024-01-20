import "./style.scss"
import data from "../../Data/Tecnologies.json"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Tecnologies(){
    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return <>
    <Slider {...settings}>
    {data.map((tec, key) => {
        return <>

            <div className="imgContainer">
            <img className="img" key={key}src={tec.url} alt={tec.name} />
            <h1 className="imgTitle">{tec.name}</h1>
            </div>
        </>
    })}
    </Slider>
    </>
}

export default Tecnologies;