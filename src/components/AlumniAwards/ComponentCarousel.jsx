import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function ComponentCarousel() {

  const images = [
    "https://cvr.ac.in/alumni/images/nameplatesfi.png",
    "https://cvr.ac.in/alumni/images/sankalpkunal.png",
    "https://cvr.ac.in/alumni/images/three.png",
    "https://cvr.ac.in/alumni/images/bridgeinaugural.png",
    "https://cvr.ac.in/alumni/images/sheetal.png",
    "https://cvr.ac.in/alumni/images/chakri1.png",
    "https://cvr.ac.in/alumni/images/bridge.png"

  ]
  function newCarousel(props) {
    return (
      <div>
        <img src={props} alt="cvr" />
      </div>
    )
  }
  return (
    <Carousel autoPlay interval="4000" showThumbs={false} className="alumniAwardsCarousel" infiniteLoop>
      {images.map(newCarousel)}
    </Carousel>
  )
}