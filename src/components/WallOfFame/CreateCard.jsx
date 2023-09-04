import Aos from "aos";
import { useEffect } from "react";
export default function CreateCard(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    function Card(props) {
        return (
            <div className="wallOfFameCard" data-aos="fade-in-out" data-aos-anchor-placement="top-bottom">

                <img src={props.img} alt="alumni" className="wofImage" />

                <div className="wofCardInfo">
                    <h3>{props.name}</h3>
                    <p>{props.branch}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {props.info.map(Card)}
            {console.log(props.info)}
        </div>
    )
}