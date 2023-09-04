import CreateCard from "./CreateCard";
import TopScrollBtn from "./TopScrollButton";
import { useState,useEffect } from "react";
export default function Celebrities() {
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

    const info = [
        {
            name: "Rahul K Velpula",
            branch: "(2006-10): Indian rapper, songwriter and actor.",
            description: "Rahul Kumar Velpula is known professionally as Roll Rida in Telugu films and music.",
            img: "https://cvr.ac.in/alumni/images/roll.jfif"
        },
        {
            name: "Sankalp Reddy",
            branch: "(2002-06): Indian film director, and screenwriter.",
            description: "Sankalp made his directorial debut with the war film Ghazi (2017) which won the National Film Award for Best Feature Film in Telugu.",
            img: "https://cvr.ac.in/alumni/images/sankalp.jpg"
        },
        {
            name: "Kunal Kaushik",
            branch: "(2002-06): Actor @ Indian Film Industry & Story and Screenwriting from New York Film Academy.",
            description: "Kuanl played crucial role in The Ghazi Attack, and acted in many other feature films as hero and a character artist.",
            img: "https://cvr.ac.in/alumni/images/kunal.jfif"
        },
        {
            name: "Anurag Reddy",
            branch: "(2006-10): Co-Founder/Producer at Chai Bisket Films, Co-Founder/Producer at A+S Movies and Co-Founder/Producer at Rowdy Club.",
            description: "Anurag obtained his MBA from Narsee Monjee Institute of Management Studies.",
            img: "https://cvr.ac.in/alumni/images/anuragreddy.jpg"
        },
        {
            name: "Prasanth Varma",
            branch: "(2006-10): Indian film director and Screenwriter.",
            description: "Prasanth is best known for directing Awe (2018) and Zombie Reddy (2021).",
            img: "https://cvr.ac.in/alumni/images/prashanth-varma.png"
        },
        {
            name: "Santosh Nanduri",
            branch: "(2005-2009): Indian Australian Multi-Instrumentalist, song writer and music composer, Founder of KNOW.",
            description: "Collaborates with Phaniraj, his official website- know.hearnow.com.",
            img: "https://cvr.ac.in/alumni/images/santoshnanduri.jpg"
        },
        {
            name: "Phaniraj Govindaraju",
            branch: "(2005-2009): Engineer, youtuber, pianist and song writer, Co-Founder of KNOW.",
            description: "Maintains an aviation youtube channel and collaborates with Santosh under the brand KNOW, know.hearnow.com.",
            img: "https://cvr.ac.in/alumni/images/Phaniraj1.jpg"
        }
    ]

    
    return (
        <div className="wof">
            <h1>Celebrities</h1>
            <CreateCard info={info} />
            <TopScrollBtn showBtn={showBtn}/>
        </div>
    )
}