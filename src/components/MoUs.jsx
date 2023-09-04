import React from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import { useEffect } from "react";
export default function MoUs() {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <div className="moUs">
            <img src="./images/mou.png" alt="" className="mousPicMain" />
            <div className="moUsContents" data-aos="fade-right"  data-aos-easing="ease-in">
                <img src="./images/mdx.png" alt="" className="moUsImage" />
                <div className="moUsDescriptionRight">
                    <h2>MoU with Fragma Data Systems</h2>
                    <p>
                        CVR College of Engineering had signed MoU with Fragma Datasystems, Bangalore, on 26 June 2021 in the presence of Prof. Nayanathara K Sattiraju, Principal, CVRCE and Mr. Varun Reddy, Co-Founder and CEO, Fragma Datasystems, and Alumnus, CSE.
                        This MoU caters to offering Consultancy Projects, collaboration in Research, Knowledge Transfer to the faculty on AI, Big Data Ecosystems, and Cloud Computing.
                    </p>
                </div>
            </div>
            <div className="moUsContents" data-aos="fade-left"  data-aos-easing="ease-in">
                <div className="moUsDescriptionLeft" >
                    <h2>MoU with Fragma Data Systems</h2>
                    <p>
                        CVR College of Engineering had signed MoU with Fragma Datasystems, Bangalore, on 26 June 2021 in the presence of Prof. Nayanathara K Sattiraju, Principal, CVRCE and Mr. Varun Reddy, Co-Founder and CEO, Fragma Datasystems, and Alumnus, CSE.
                        This MoU caters to offering Consultancy Projects, collaboration in Research, Knowledge Transfer to the faculty on AI, Big Data Ecosystems, and Cloud Computing.
                    </p>
                </div>
                <img src="./images/mdx_mou.png" alt="" className="moUsImage" />
            </div>
        </div>
    )
}