import React from "react";
import Table from "./Table";
export default function BousIqac() {

    const tbody = [
        {
            b1: 1,
            b2: "Aditya Swaroop Joshi, Regional Manager, ICICI",
            b3: "IQAC"
        },
        {
            b1: 2,
            b2: "KVS Chalapathi, Xilinx",
            b3: "IQAC"
        },
        {
            b1: 3,
            b2: "Kartik Kulkarni",
            b3: "BoS, ECE"
        },
        {
            b1: 4,
            b2: "Ch. Jayashankar",
            b3: "BoS, ECE"
        },
        {
            b1: 5,
            b2: "Ramya Poojari",
            b3: "BoS, ME"
        },
        {
            b1: 6,
            b2: "D Karthik Reddy, Director, Upakriya PVT LTD",
            b3: "BoS, IT"
        },
        {
            b1: 7,
            b2: "B Dakshina Murty, Manager, Pramati Technologies",
            b3: "BoS, IT"
        },
        {
            b1: 8,
            b2: "Ramya Poojari",
            b3: "BoS, ME"
        },
        {
            b1: 9,
            b2: "Nishanth P, Deputy Manager, BHEL",
            b3: "BoS, EEE"
        },
        {
            b1: 10,
            b2: "Shruthi Pappala",
            b3: "BoS, EIE"
        },
        {
            b1: 11,
            b2: "Yeleswarapu Sriya",
            b3: "BoS, EIE"
        },
        {
            b1: 12,
            b2: "P Sai Prasad",
            b3: "BoS, CE"
        },
        {
            b1: 13,
            b2: "Varun Abhiramakrishna, Manager, Oracle",
            b3: "BoS, CSE"
        },
        {
            b1: 14,
            b2: "Harsh H Shah, Manager, Deloitte",
            b3: "BoS, CSE"
        },
        {
            b1: 15,
            b2: "Greeshma Myneni, Director & Co-Founder, Anukta IT Solutions",
            b3: "BoS, CSE"
        },
        {
            b1: 16,
            b2: "B Varun Reddy, CEO, Co-Founder, Fragma Data Systems",
            b3: "BoS, CSE"
        },
        {
            b1: 17,
            b2: "V Krishna Teja, Software Engineer, Apple",
            b3: "BoS, CSIT"
        },
        {
            b1: 18,
            b2: "Arunkumar Bathini, Product Manager, Oracle",
            b3: "BoS, CSE"
        },
        {
            b1: 19,
            b2: "Sangeetha Basungari, Product Manager, DE Shaw",
            b3: "IQAC"
        },
        {
            b1: 20,
            b2: "Varun Raj, AMD",
            b3: "IQAC"
        },
        {
            b1: 21,
            b2: "Aditya Sirne, Apple",
            b3: "BoS, IT"
        },
        {
            b1: 22,
            b2: "Manohar, Infosys",
            b3: "BoS, IT"
        }
    ]

    const thead = [
        {
            h1: "S.No.",
            h2: "Alumni Name",
            h3: "Branch"
        }
    ]

    return (
        <div classb2="bousIqac">
            <h2 className="bousIqacHead">Alumni in BoS and IQAC</h2>
            <Table tbody={tbody} thead={thead} />
        </div>
    )
}