import React from "react";
import CreateCard from "./CreateCard";
import TopScrollBtn from "./TopScrollButton";
import { useState,useEffect } from "react";
export default function Doctorates() {
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
    const doctorates = [
        {
            id: 1,
            name: "Dr. Sriram Somanchi",
            branch: "B.Tech-CSE(2002-06) Assistant Professor, University of Notre Dame, USA.",
            description: "Sriram obtained his ME from IISc and received PhD from Carnegie Mellon University.",
            img: "https://cvr.ac.in/alumni/images/sriram.jfif"
        },
        {
            id: 2,
            name: "Dr. Santosh Tirunagari",
            branch: "CSE-(2005-09): ML Engineer, EMBL, and Honorary Asst Prof, MDX university.",
            description: "Santosh obtained his Masters from Aalto University and received PhD from University of Surrey.",
            img: "https://cvr.ac.in/alumni/images/santosht.jpg"
        },
        {
            id: 3,
            name: "Dr. Tej Varma Yenupuri",
            branch: "EEE-(2005-09): Researcher, Uppsala University.",
            description: "Tej obtained his Masters from VIT, PhD in Physics from BITS-Pilani and completed three postdocs from Prague, Germany and Sweden.",
            img: "https://cvr.ac.in/alumni/images/tejavarma.jpg"
        },
        {
            id: 4,
            name: "Dr. Koppu Srinivas",
            branch: "CSE-(2002-06): Associate Professor in VIT.",
            description: "Srini completed his M.Tech from IIIT-A and received PhD from VIT.",
            img: "https://cvr.ac.in/alumni/images/srinivasvit.jfif"
        },
        {
            id: 5,
            name: "Dr. Madhavi Gudavalli, M.Tech",
            branch: "CSE-(2007-09): Assistant Professor, IT Department, JNTUK.",
            description: "Madhavi obtained her PhD in CSE from JNTUH.",
            img: "https://cvr.ac.in/alumni/images/madhavig.jfif"
        },
        {
            id: 6,
            name: "Dr. Suneetha Eluri, M.Tech",
            branch: "CSE-(2008-10): Assistant Professor, CSE Department, JNTUK.",
            description: "Suneetha obtained her PhD in CSE from JNTUK.",
            img: "https://cvr.ac.in/alumni/images/sunithaeluri.jpg"
        },
        {
            id: 7,
            name: "Dr. Hemath P",
            branch: "EEE-(2005-09): Solutions Architect/Data Scientist/Big Data Consultant, Cloudera.",
            description: "Hemanth obtained his PhD from University of Glasgow.",
            img: "https://cvr.ac.in/alumni/images/hemantheee.jpg"
        },
        {
            id: 8,
            name: "Dr. Vadthya Jagan ",
            branch: "EEE-(2003-07): Associate Professor, VBIT.",
            description: "Jagan obtained his M.Tech and PhD from IIT-R.",
            img: "https://cvr.ac.in/alumni/images/jaganeee.jpg"
        },
        {
            id: 9,
            name: "Dr. Naveenkumar M",
            branch: "EEE-(2005-09): EV and Hybrid Electric Vehicle||Frontline Manager, Hitachi Energy.",
            description: "Naveen obtained his PhD from Shiv Nadar University.",
            img: "https://cvr.ac.in/alumni/images/naveeneee.jpg"
        },
        {
            id: 10,
            name: "Dr. Karthik Reddy Venna",
            branch: "EEE-(2005-09): Key Expert, Siemens AG.",
            description: "Karthik obtained his PhD from Brandenburgische Technische Universität Cottbus-Senftenberg.",
            img: "https://cvr.ac.in/alumni/images/karthikvenna.jpg"
        },
        {
            id: 11,
            name: "Dr. Viraj Adduru",
            branch: "ECE-(2006-10): Machine Learning and Data Science Engineer on Pre-si validation, Intel.",
            description: "Viraj obtained his Masters and PhD from Rochester Institute of Technology.",
            img: "https://cvr.ac.in/alumni/images/viraj.jpg"
        },
        {
            id: 12,
            name: "Dr. Mahesh Aeidapu",
            branch: "EEE-(2006-10): Assistant Professor, SVNIT Surat.",
            description: "Mahesh obtained his Masters from PEC and received his PhD from NIT- Kurukshetra.",
            img: "https://cvr.ac.in/alumni/images/mahesheee.jpg"
        },
        {
            id: 13,
            name: "Dr. Koteswara Rao Kothapalli",
            branch: "EEE-(2006-10): Asst Professor, Amrita Vishwa Vidyapeetham.",
            description: "KKR obtained his Masters from OU and PhD from NIT-N.",
            img: "https://cvr.ac.in/alumni/images/kkr.jpg"
        },
        {
            id: 14,
            name: "Dr. Sowmya Kolli",
            branch: "ECE-(2006-10): Product Development Engineer, Intel Corporation.",
            description: "Sowmya obtained her PhD from University of Louisville.",
            img: "https://cvr.ac.in/alumni/images/kolli.png"
        },
        {
            id: 15,
            name: "Dr. Vindhya Devalla",
            branch: "EIE-(2006-10): Senior System Engineer, Matdun.",
            description: "Vindhya obtained her Masters and PhD from University of Petroleum and Energy Studies, and she served as Asst Prof at UPES.",
            img: "https://cvr.ac.in/alumni/images/vindhya.jpg"
        },
        {
            id: 16,
            name: "Dr. Yerraguntla Shasi Kumar",
            branch: "EEE-(2006-10): Hardware Specialist at Bosch Engineering and Business Solutions.",
            description: "Shasi obtained his Masters from MNNIT and PhD from IIT-Kharagpur.",
            img: "https://cvr.ac.in/alumni/images/shasi.jpg"
        },
        {
            id: 17,
            name: "Dr. Sanjeev Pannala",
            branch: "EEE-(2007-11): Research Assistant Professor, ESIC, Washington State University.",
            description: "Sanjeev competed his Post Doc from WSU, obtained his Masters from NIT-B and PhD from IIT-R.",
            img: "https://cvr.ac.in/alumni/images/sanjeeveee.jpg"
        },
        {
            id: 18,
            name: "Dr. Sumeet Chaudhary",
            branch: "EIE-(2007-11): Assistant Teaching Professor, University of Colorado Boulder.",
            description: "Sumeet competed his Masters from Western Michigan University, obtained his PhD from University of Cincinnati.",
            img: "https://cvr.ac.in/alumni/images/sumeethphd.jpg"
        },
        {
            id: 19,
            name: "Dr. Deepak R Pullaguram",
            branch: "EEE-(2008-12): Assistant Professor, Department of Electrical Engineering, Indian Institute of Technology- Kharagpur.",
            description: "Deepak obtained his Masters from NIT-W and PhD from IIT-D",
            img: "https://cvr.ac.in/alumni/images/deepakeee.jpg"
        },
        {
            id: 20,
            name: "Dr. Nikhil Krishna B",
            branch: "EEE-(2008-12): Deputy Manager (R&D-Traction), Hind Rectifiers Ltd.",
            description: "Nikhil obtained his Masters from OU and PhD from IIT-D.",
            img: "https://cvr.ac.in/alumni/images/nikhileee.jpg"
        },
        {
            id: 21,
            name: "Dr. Abhijit V",
            branch: "EIE-(2009-13): Data Scientist, Center for Urban Transportation Research (CUTR).",
            description: "bhijit obtained his MS and PhD from University of South Florida.",
            img: "https://cvr.ac.in/alumni/images/abhijit.jpg"
        },
        {
            id: 22,
            name: "Dr. Badrinath Jagannath",
            branch: "EIE-(2009-13): Research Scientist, Baxter Young Investigator Awardee(2021).",
            description: "Badrinath obtained his MS from ASU and received PhD in Biomedical Engineering from University of Texas, Dallas.",
            img: "https://cvr.ac.in/alumni/images/badrianath.jfif"
        },
        {
            id: 23,
            name: "Dr. M Sunitha, M.Tech",
            branch: "CSE-(2009-11): Professor, Department of CSE, CVRCE.",
            description:"Sunitha obtained her PhD from JNTUH.",
            img: "https://cvr.ac.in/alumni/images/maddi.jpg"
        },
        {
            id: 24,
            name: "Dr. S Suguna Mallika, M.Tech",
            branch: "CSE-(2010-12): Professor, Department of CSE, CVRCE.",
            description: "Suguna obtained her PhD from JNTUK.",
            img: "https://cvr.ac.in/alumni/images/suguna.jfif"
        },
        {
            id: 25,
            name: "Dr. BSAS Rajitha, M.Tech",
            branch: "CSE-(2011-13): Research Scientist.",
            description: "Rajitha obtained her PhD in the area of Deep Learning from BITS, Pilani.",
            img: "https://cvr.ac.in/alumni/images/rajithacse.jpg"
        }
    ]


    return (
        <div className="wof">
            <h1>Doctorates</h1>
            <CreateCard info={doctorates}/>
            <TopScrollBtn showBtn={showBtn}/>
        </div>
    )
}