import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function OnCampus() {
    function createCarousel(props) {
        return (
            <div className="onCampusCarousel">
                <div className="onCampusHeading">
                    <h2>{props.head}</h2>
                </div>
                <img src={props.img} alt="cvr" />
            </div>
        )
    }
    const images = [
        { img: "https://cvr.ac.in/alumni/images/CVR_AL.png", head: "Alumni Meet" },
        { img: "https://cvr.ac.in/alumni/images/cseal2.jpg", head: "Alumni Meet 2016" },
        { img: "https://cvr.ac.in/alumni/images/cseal3.jpg", head: "Alumni Meet 2017" },
        { img: "./images/meet2019.png", head: "Alumni Meet 2019" },
        { img: "https://cvr.ac.in/alumni/images/cseal5.jpg", head: "Alumni Meet 2020" },
    ]
    return (
        <div>
            <Carousel autoPlay interval="4000" showThumbs={false}  infiniteLoop>
                {images.map(createCarousel)}
            </Carousel>
        </div>
    )
}