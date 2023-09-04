import React from "react";
import { useEffect } from "react";
import Aos from "aos";
export default function Overseas() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    const info = [
        {
            place: "Dallas",
            date: "23 Oct 2021",
            leftImg: "./images/dallasinvite.jpg",
            title: "Global Experiences",
            midImg: "./images/dallas-group.jpg",
            rightImg: "./images/dallas2.jpg"
        },
        {
            place: "Bay Area",
            date: "10 Oct 2021",
            leftImg: "./images/BayArea-Invite.jpg",
            title: "Global Excellence",
            midImg: "./images/Chairmanca.jpg",
            rightImg: "./images/mahalakshmi.jpg"
        },
        {
            place: "Fremont CA",
            date: "22 Oct 2016",
            leftImg: "./images/2016invite.jpg",
            title: "Reunion",
            midImg: "./images/bayarea-2016.jpg",
            rightImg: "./images/cakecutting.jpg"
        }
    ]

    function Card(props) {
        return (
            <div className="overseasCard" data-aos="fade-in-out">
                <div className="leftOverseasCard" >
                    <h3 className="place">{props.place}</h3>
                    <h3 className="date">{props.date}</h3>
                    <img src={props.leftImg} alt="img" className="leftOverseasImage" />
                </div>
                <div className="middleOverseasCard" >
                    <h3>{props.title}</h3>
                    <img src={props.midImg} alt="GroupImg" className="groupImage" />
                </div>
                <div className="rightOverseasCard">
                    <img src={props.rightImg} alt="img" className="rightOverseasImage" />
                </div>
            </div>
        )
    }

    return (
        <div className="overseas">
            <h2 data-aos="fade-in-out">Alumni Meets</h2>
            <div>
                {info.map(Card)}
            </div>
        </div>
    )
}