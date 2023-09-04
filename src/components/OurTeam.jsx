import React from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import { useEffect } from "react";
export default function OurTeam() {

   useEffect(()=>{
     Aos.init({ duration: 1000 })
   },[])

    const teamInfo = [
        {
            name: "Raghava M, PhD",
            dept: "Professor, Department of Computer Science and Engineering.",
            role: "Associate Dean- Office of Alumni Affairs. Mobile #: 9848096238.",
            img: "https://cvr.ac.in/alumni/images/Raghava.png",
        },
        {
            name: "Sri B Satish",
            dept: "Associate Professor, Department of Electronics and Instrumentation Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/bsatish.jpg"
        },
        {
            name: "Dr G Sree Lakshmi",
            dept: "Professor, Department of Electrical and Electronics Engineering",
            role: "Coordinator on Request- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/drsrilaksmi.png"
        },
        {
            name: "Ms M Rajitha",
            dept: "Assistant Professor, Department of Electrical and Electronics Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/rajitha.png"
        },
        {
            name: "Ms G Saranya",
            dept: "Assistant Professor, Department of Civil Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/saranya.jpg"
        },
        {
            name: "Sri R Ganesh",
            dept: "Associate Professor, Department of Electronics and Communication Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/rganesh.jfif"
        },
        {
            name: "Sri Mahadev Srikanth",
            dept: "Associate Professor, Department of Mathematics.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/mahadev.jpg"
        },
        {
            name: "Sri M Ravi Kumar",
            dept: "Assistant Pofessor, Department of Mechanichal Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/Ravi.jpg"
        },
        {
            name: "Sri A Seetaram Nagesh",
            dept: "Sr. Assistant Professor, Department of Information Technology.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/seetaramnagesh.jfif"
        },
        {
            name: "Sri Suhail Afroz",
            dept: "Associate Professor, Department of Computer Science and Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/suhail.png"
        },
        {
            name: "Dr. S Suguna Mallika",
            dept: "Professor, Department of Computer Science and Engineering.",
            role: "Coordinator- Office of Alumni Affairs.",
            img: "https://cvr.ac.in/alumni/images/suguna.jfif"
        },

    ]
    function Card(props) {
        return (
            <div className="col col-lg-4 col-sm-12 teamCard" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <div>
                    <img src={props.img} alt="teamMember" />
                    <div className="teamMember">
                        <h4>{props.name}</h4>
                        <p>{props.dept}</p>
                        <p>{props.role}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="teamContainer" >
            <div className="row" style={{ margin: "0" }}>
                {teamInfo.map(Card)}
            </div>
        </div>
    )
}