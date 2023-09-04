
import {FaArrowAltCircleUp } from "react-icons/fa";

export default function TopScrollBtn(props) {
    let showBtn = props.showBtn;
    function scrollToTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <>
            {showBtn && (
                <button className="topScrollBtn" onClick={scrollToTop}>
                    <FaArrowAltCircleUp />
                </button>)}
        </>
    )
}