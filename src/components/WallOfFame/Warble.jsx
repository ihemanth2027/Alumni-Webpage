import CreateCard from "./CreateCard"
import TopScrollBtn from "./TopScrollButton";
import { useState,useEffect } from "react";
export default function Warble(){
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
    const info=[
        {
            name:"Susmita Kandadai:",
            branch:"",
            description:"surely, this looks great!",
            img:"https://cvr.ac.in/alumni/images/sush.jpg"
        },
        {
            name:"Aditya Mudunuru:",
            branch:"",
            description:"Indeed appreciate the efforts. It's been ten years since I graduated from the college, and the action that I'm seeing this year is the first-ever of such scale, in terms of alumni outreach.",
            img:"https://cvr.ac.in/alumni/images/am.jpg"
        },
        {
            name:"Yugandhar Reddy Boyapally:",
            branch:"",
            description:"This is cool, haven’t seen this before. Thanks for adding me",
            img:"https://cvr.ac.in/alumni/images/yug.jpg"
        },
        {
            name:"Akhil Devarakonda:",
            branch:"",
            description:"So delighted and grateful for this. Thank you very much for the mention. Would love to visit soon and stay connected. :)",
            img:"https://cvr.ac.in/alumni/images/akhil.jpg"
        },
        {
            name:"Trina Roy:",
            branch:"",
            description:"thank you so much!.",
            img:"https://cvr.ac.in/alumni/images/trina.jpg"
        },
        {
            name:"Nagarjun Chakilam:",
            branch:"",
            description:"Looks good. Thanks again for putting in efforts to curate all alumni profiles. Much appreciate the work. Hope this helps all students and potentially alumni as well.",
            img:"https://cvr.ac.in/alumni/images/chakilam.jpg"
        },
        {
            name:"Sreekanth Pinjala:",
            branch:"",
            description:"Thanks so much again for all you do, to keep us connected. I sure appreciate this a lot, like many of us.",
            img:"https://cvr.ac.in/alumni/images/sree.jpg"
        },
        {
            name:"Gunjan Gupta:",
            branch:"",
            description:"We are equally proud to bring out the name of our institution to spread its wings. The young chaps today graduating can do wonders undoubtedly, Thanks like tons to the institution and CVR team for adding me and my recognition to the wall.",
            img:"https://cvr.ac.in/alumni/images/gunjan.jpg"
        },
        {
            name:"Phani Anand Gollapudi:",
            branch:"",
            description:"Oh wow thanks a lot for this honor.",
            img:"https://cvr.ac.in/alumni/images/phanianand.jpg"
        },
        {
            name:"Sumana Yellanki:",
            branch:"",
            description:"thankyou for adding me to the wall of fame.",
            img:"https://cvr.ac.in/alumni/images/sumana.jpg"
        },
        {
            name:"Muhammed Fazal Baig",
            branch:"",
            description:": Thank you very very much. I am honoured.",
            img:"https://cvr.ac.in/alumni/images/fazal.jpg"
        },
        {
            name:"Maruth Muthigi:",
            branch:"",
            description:"lad to see my dear senior and junior friends flying high. The team is doing thankless service by connecting Alumni data..!",
            img:"https://cvr.ac.in/alumni/images/maruth.jpg"
        },
        {
            name:"Priyatham Kunarapu:",
            branch:"",
            description:"Thank you so much for the recognition. I'm so happy to see that. Nice mark..",
            img:"https://cvr.ac.in/alumni/images/priyatham.jpg"
        },
        {
            name:"Vamsi Thilak",
            branch:"",
            description:": Thank you for reaching out and wall of fame details looks great.",
            img:"https://cvr.ac.in/alumni/images/vamsit.jpg"
        },
        {
            name:"Sai Prajnan Emani:",
            branch:"",
            description:"Honoured to be included on the list.",
            img:"https://cvr.ac.in/alumni/images/prajnan.jpg"
        },
        {
            name:"Shankar Raju",
            branch:"",
            description:": Thank you so much for the recognition! Feels nice to be associated in the space! 🙂",
            img:"https://cvr.ac.in/alumni/images/shankarraju.jpg"
        },
        {
            name:"Ramanjaneyulu Gudipati",
            branch:"",
            description:": Thank you very much, It is my honor.",
            img:"https://cvr.ac.in/alumni/images/ramece.jpg"
        },
        {
            name:"Divya Vobilisetty",
            branch:"",
            description:": That’s a good idea. I love to contribute. I see my name already on the board.",
            img:"https://cvr.ac.in/alumni/images/divyao.jpg"
        },
        {
            name:"Sai Sasidhar Maddali",
            branch:"",
            description:": Thanks for the recognition and happy to see my profile added to the alumni portal..",
            img:"https://cvr.ac.in/alumni/images/maddali.jpg"
        },
        {
            name:"P Raj R",
            branch:"",
            description:": Thanks for posting me in the list. It's a great feeling for me to be part of this list and good to see our CVR family members current status here. Nice initiative 👏👏.",
            img:"https://cvr.ac.in/alumni/images/rajr.jpg"
        },

    ]
    return(
        <div className="wof">
            <h1>Warble</h1>
            <CreateCard info={info}/>
            <TopScrollBtn showBtn={showBtn}/>
        </div>
    )
}