import React from "react";
import CreateCard from "./CreateCard";
import TopScrollBtn from "./TopScrollButton";
import { useState,useEffect } from "react";
export default function GovtOfficials() {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
           if(window.scrollY>400){
             setShowBtn(true);
           }
           else{
            setShowBtn(false)
           }
        })
    })
    const govtInfo = [
        {
            id: 1,
            name: "Kovuri Pavan Kumar",
            branch: "(2002-06): Assistant Excise Superintendent, Telangana State.",
            description: "",
            img: "https://cvr.ac.in/alumni/images/kovuripavan.jpg"
        },
        {
            id: 2,
            name: "Ch. Srutha Keerthi",
            branch: "(2004-08): Civil Servant, Addl SP, Intelligence(SIB).",
            description: "",
            img: "https://cvr.ac.in/alumni/images/sruthakeerthi.png"
        },
        {
            id: 3,
            name: "Gunjan Gupta",
            branch: "(2005-09): Air Traffic Controller, Airports Authority of India.",
            description: "",
            img: "https://cvr.ac.in/alumni/images/gunjan.jpg"
        },
        {
            id: 4,
            name: "PV Rami Reddy",
            branch: "(2006-10): Deputy Financial Advisor, Ministry of Railways.",
            description: "Rami Reddy obtained his M.Tech from IIT-Bombay.",
            img: "https://cvr.ac.in/alumni/images/ramireddyper.jpg"
        },
        {
            id: 5,
            name: "Rohit Kumar Gupta",
            branch: "(2007-11): Transitioning Naval Aviator, Strategic Operations and Project Manager, Indian Navy.",
            description: "Rohit obtained his MBA from IIM-Tiruchirappalli.",
            img: "https://cvr.ac.in/alumni/images/rk.jpg"
        },
        {
            id: 6,
            name: "K Rahul Reddy",
            branch: "(2016-20): IPS Officer, Telangana Cadre.",
            description: "",
            img: "https://cvr.ac.in/alumni/images/rahulreddy.png"
        },
        {
            id: 7,
            name: "Setharama Reddy Gantla",
            branch: "(2006-10): Senior Manager, NTPC Limited.",
            description: "",
            img: "https://cvr.ac.in/alumni/images/ntpc.jpg"
        },
        {
            id: 8,
            name: "Amulya Sri Pulijala",
            branch: "(2009-13): Engineer Scientist-D, ISRO.",
            description: "Amulya obtained her Master's from IIIT-H.",
            img: "https://cvr.ac.in/alumni/images/amulya1.jpg"
        },
        {
            id: 9,
            name: "Afjal Das",
            branch: "(2006-10): Sci/Engr SE, ISRO Headquarters.",
            description: "Afjal obtained his M.Tech from NIT.",
            img: "https://cvr.ac.in/alumni/images/afjal1.jpg"
        },
        {
            id: 10,
            name: "Mahesh Thammishetty",
            branch: "(2006-10): Electrical Engineer, BHEL.",
            description: "Mahesh obtained his M.Tech from IIT-D.",
            img: "https://cvr.ac.in/alumni/images/mahesht.jpg"
        },
        {
            id: 11,
            name: "AshoK Kumar Varla",
            branch: "(2008-12): Scientist/Engineer 'SD' at Indian Space Research Organisation, ISRO Headquarters.",
            description: "Ashok obtained his M.Tech from Malaviya National Institute of Technology, Jaipur.",
            img: "https://cvr.ac.in/alumni/images/ashokisro.jpg"
        },
        {
            id: 12,
            name: "Shahansha Naguru",
            branch: "(2008-12): Aviation Officer, Indian Oil Corporation Limited.",
            description: "Shahansha obtained his M.Tech from National Institute of Technology, Surathkal.",
            img: "https://cvr.ac.in/alumni/images/sahansha.jpg"
        },
        {
            id: 13,
            name: "Rama Krishna Reddy",
            branch: "(2006-10): Assistant Engineer, Transmission Corporation Of Telangana Limited.",
            description: "Ram obtained his M.Tech from NIT-C.",
            img: "https://cvr.ac.in/alumni/images/ramkece.jpg"
        },
        {
            id: 14,
            name: "Rohith Veluru",
            branch: "(2011-15): Grade A Officer, NABARD.",
            img: "https://cvr.ac.in/alumni/images/vr.jpg"
        },
        {
            id: 15,
            name: "Nishanth Paluri Mallampalli",
            branch: "(2006-10): Deputy Manager Purchase & Sub-contract, Bharat Heavy Electricals Limited.",
            description: "Nishanth completed his Post Graduate Diploma in Energy Management, Energy Management at University of Hyderabad.",
            img: "https://cvr.ac.in/alumni/images/nishanth.jfif"
        },
    ]
    return (
        <div className="wof">
            <h1>Government Officials</h1>
            <CreateCard info={govtInfo} />
            <TopScrollBtn showBtn={showBtn}/>
        </div>
    )
}