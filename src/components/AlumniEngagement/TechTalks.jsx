import React from "react";
import Table from "./Table";
export default function TechTalks() {

    const techTalks = [
        { b1: "Murali Krishna, Mahesh Babu Chittiveri, Challa Shiva", b2: "27 May 2023", b3: "Greeted the faculty and Students" },
        { b1: "Divyank Vemulapalli", b2: "21 Mar 2023", b3: "Trends and Technologies in Application Development" },
        { b1: "Sandeep Shiva", b2: "19 Dec 2022", b3: "Time Management and Work life Balance" },
        { b1: "Vijaya Bhaskara Neeli", b2: "20 Jan 2023", b3: "Interaction with III year students" },
        { b1: "Rahul Komatineni", b2: "15 Dec 2022", b3: "How to crack Jobs in Product based IT Companies" },
        { b1: "Dr B Rajitha", b2: "10 Dec 2022", b3: "Generative Models in DL" },
        { b1: "Nagarjun Chakilam", b2: "17 Nov 2022", b3: "Keynote Address in CYPHER" },
        { b1: "Praveen C", b2: "15 Nov 2022", b3: "Spark" },
        { b1: "Sreekanth Pinjala", b2: "08 Nov 2022", b3: "Interaction with IT & CSE Students" },
        { b1: "Pranathi Bhattacharji", b2: "28 Oct 2022", b3: "Industry 4.0" },
        { b1: "Phani Anand Gollapudi", b2: "28 Oct 2022", b3: "Multi-Core Architectures" },
        { b1: "Deepthi Pisupati", b2: "28 Oct 2022", b3: "AWS" },
        { b1: "Shashank Reddy Goli", b2: "08 Sep 2021", b3: "Production Engineering" },
        { b1: "Ch Srinivas", b2: "06 Mar 2022", b3: "Simulink" },
        { b1: "Anoohya, and Sangeetha B", b2: "13 Jan 2022", b3: "JS" },
        { b1: "G Shiva Reddy", b2: "23 Aug 2021", b3: "TomTom Maps" },
        { b1: "Dr T Santosh", b2: "07 Aug 2021", b3: "Medical Image Processing and ML" },
        { b1: "Swathi and Keerthi", b2: "07 Aug 2021", b3: "Node and Angular" },
        { b1: "Hitesh D", b2: "20 Jan 2020", b3: "Simulink and Usecase Implementation" },
        { b1: "Bala Chander Reddy and Sudheer Reddy", b2: "04 Jan 2020", b3: "Embedded System Design Principles" },
        { b1: "B Rajesh", b2: "19 Jan 2020", b3: "Serverside Scripting Technologies" },
        { b1: "K Rama Krishna Reddy", b2: "21 Dec 2019", b3: "Challenges in Bioengineering" },
        { b1: "SCVSLS Ravi Kiran", b2: "05 Jan 2019", b3: "Mobile Application" },
        { b1: "Raghuveer Ramkumar", b2: "21 Dec 2018", b3: "Prospects of MBA for Engineers" },
        { b1: "Daniel Vivek", b2: "21 Aug 2017", b3: "iOS Application Development" },
        { b1: "Pritheesh Panchmahalkar", b2: "17 Jul 2017", b3: "Web Application Development using Django framework" },
        { b1: "Nikhil Vedurumudi", b2: "23 Mar 2017", b3: "AJAX" },
        { b1: "B S Sangeetha", b2: "28 Jan 2017", b3: "Virtual Machines and Security Challenges" },
        { b1: "P Bharath Reddy", b2: "20 Jan 2017", b3: "Business Process Modeling" },
        { b1: "Aditya Joshi", b2: "19 Feb 2016", b3: "LTE" },
        { b1: "B Varun Reddy", b2: "24 Aug 2016", b3: "Classification Tools in Data Science" },
        { b1: "G Yashwanth Reddy, Sai Meghana S & Tirupathi", b2: "22 Aug 2016", b3: "Conducted C Coding Challenge" },
        { b1: "Chavali Sai Kiran", b2: "12 Sept 2015", b3: "	Android Application Frameworks" },
        { b1: "Dasika Hitesh", b2: "01 Aug 2015", b3: "RESTFul API and Web Services" },
        { b1: "Harsh H Shah", b2: "07 Jul 2015", b3: "IoT" }
    ]

    const thead = [
        {
            h1: "ALumni Name",
            h2: "Date",
            h3: "Topic"
        }
    ]

    return (
        <div>
            <h2 className="techTalksHead">Tech Talks</h2>
            <Table tbody={techTalks} thead={thead} />
        </div>
    )
} 