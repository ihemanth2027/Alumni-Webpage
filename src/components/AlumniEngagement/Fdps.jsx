import React from "react";
import Table from "./Table";
export default function Fdps() {

    const fdps = [
        { b1: "G Karthik Reddy, CEO, Upakriya", b2: "09-10 Dec 2022", b3: "Cloud Computing" },
        { b1: "Dr. B Rajitha", b2: "09-10 Dec 2022", b3: "Deep Learning" },
        { b1: "Nikhil Vedurimudi- Microsoft, Harshit Kumar- Walmart, and Chirag Anand- CommVault", b2: "25-30 Jan 2021", b3: "Web Engineering" },
        { b1: "Manish (MuSigma)", b2: "21 - 26 Sep 2020 Online", b3: "Journey of Statistics to Data Sciences" },
        { b1: "Harshit Kumar, Walmart and Karthik Rachamalli, PlaySafe", b2: "27 - 31 Aug 2019", b3: "Frontend Engineering" },
        { b1: "Suhail Afroz, CVRCE", b2: "25 June – 20 July 2019", b3: "Mobile Application Development using Android" },
        { b1: "Daniel Vivek, Mutual Mobile", b2: "16 Feb 2019", b3: "iOS Swift Programming" },
        { b1: "Daniel Vivek and Phanindra", b2: "19 – 21 Jan 2018", b3: "Mobile Application Development using iOS" },
        { b1: "Mr. G Sandeep and, Ravi Teja T, Capgemini", b2: "15 - 16 Mar 2018", b3: "IoT Home Automation" },
        { b1: "R Sri Venkateswarlu, CTS", b2: "17 - 18 Feb 2017", b3: "R Programming" },
        { b1: "K Ramakrishna Reddy, CISCO", b2: "18 Jan - 7 Feb 2012", b3: "Android Application Development" }
    ]

    const thead = [
        {
            h1: "Alumni Name",
            h2: "Date",
            h3: "Title"
        }
    ]
    return (
        <div>
            <h2 className="fdpHead">FDPs and Workshops Conducted by Alumni</h2>
            <Table tbody={fdps} thead={thead} />
        </div>
    )
}