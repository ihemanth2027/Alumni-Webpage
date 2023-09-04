import React from "react";
export default function ProductExhibits() {

    function createProductExhibits(params, index) {
        console.log(params)
        return (
            <div className="slide">
                <div>
                    <label>Alumni Name : </label>
                    <p>{params.name}</p>
                </div>
                <div>
                    <label>Date : </label>
                    <p>{params.date}</p>
                </div>
                <div>
                    <label style={{ fontWeight: "600" }}>Title : </label>
                    <p style={{ fontWeight: "600" }}>{params.title}</p>
                </div>
            </div>
        )
    }

    const productExhibitsInfo = [
        {
            name: "Varun Abhiramakrishna, Manager, Oracle",
            date: "25-26 June 2021",
            title: "Moderator for Exhibits"
        },
        {
            name: "Shiva G, TomTom, Nedherlands",
            date: "25 June 2021",
            title: "Autonomous Vehicles, TomTom Navigation Maps"
        }
        , {
            name: "Siva Sadhu, AWS, Netherlands",
            date: "26 June 2021",
            title: "Artificial Web Intelligence"
        },
        {
            name: "Rohith Ageer, BOSCH, Netherlands",
            date: "26 June 2021",
            title: "Machine Vision and Industry 4.0"
        },
        {
            name: "Ananth Rachakonda, Bionics",
            date: "26 June 2021",
            title: "KALArm"
        }
        ,
        {
            name: "Dr Sriram Somanchi, University of Notre Dame",
            date: "26 June 2021",
            title: "Data Driven AI VS Model Driven AI"
        }
    ]
    return (
        <div class="sliderOuter">
            <div class="sliderInner">
                {productExhibitsInfo.map(createProductExhibits)}
            </div>
        </div>
    )
}