import React, { useEffect } from "react";
import "../styles.css";
import "aos/dist/aos.css"
import Aos from "aos";
import ProductExhibits from "./ProductExhibits";
export default function Exhibits() {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, []);

    const exhibits = [
        {
            img: "./images/AIxcellence4.png",
            info: "NLP and Mobile Applications"
        },
        {
            img: "./images/AIxcellence3.png",
            info: "Autonomous Vehicles"
        },
        {
            img: "./images/AIxcellence2.png",
            info: "Industry 4.0"
        },
        {
            img: "./images/AIxcellence1.png",
            info: "Panel Discussion"
        }
    ]

    function mapExhibits(params) {

        return (
            <div className="col col-lg-6 ">
                <div className="exhibitBox" data-aos="fade-up" data-aos-duration="3000">
                    <img src={params.img} alt="AIxcellenceImage" className="exhibitsImage" />
                    <p>{params.info}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="exhibits">
            <div className="exhibitDiv">
                <h2 data-aos="zoom-in" >
                    AIxcellence organized by Dept of CSE during 25-26 June 2021
                </h2>
                <hr />
                <div className="alumniCarousel">
                    <div className="h2">
                        <h2>Product Exhibits by Alumni</h2>
                    </div>
                    <ProductExhibits/>
                </div>
                <hr />
            </div>

            <div className="gradient">
                <h2>Product Exhibits in AIxcellence: Flyers</h2>
                <div className="container">
                    <div className="row">
                        {exhibits.map(mapExhibits)}
                    </div>
                </div>
            </div>
        </div>
    )
}