import React from "react";
import Aos from "aos";
import { useEffect } from "react";
export default function AlumniGallery() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const images = [
        {
            img: "https://cvr.ac.in/alumni/images/divyank.jpeg",
            name: "Divyank V"
        },
        {
            img: "https://cvr.ac.in/alumni/images/sandeepshivatalk.jpg",
            name: "Sandeep Shiva"
        },
        {
            img: "https://cvr.ac.in/alumni/images/vijay_neeli2.jpg",
            name: "Vijaya Bhaskara Neeli"
        },
        {
            img: "https://cvr.ac.in/alumni/images/adi.jpg",
            name: "Aditya S and Manohar"
        },
        {
            img: "https://cvr.ac.in/alumni/images/anathpur.jpg",
            name: "Kowshik T"
        },
        {
            img: "https://cvr.ac.in/alumni/images/rahulk.jpeg",
            name: "K Rahul"
        },
        {
            img: "https://cvr.ac.in/alumni/images/NagarjunC.jpg",
            name: "Nagarjun Chakilam"
        },
        {
            img: "https://cvr.ac.in/alumni/images/Praneenc.jpg",
            name: "Praveen C"
        },
        {
            img: "https://cvr.ac.in/alumni/images/sp.jpg",
            name: "Sreekanth P"
        },
        {
            img: "https://cvr.ac.in/alumni/images/Teslab.jpg",
            name: "Pranathi Bhattacharji"
        },
        {
            img: "https://cvr.ac.in/alumni/images/gp.jpg",
            name: "Phani Anand Gollapudi"
        },
        {
            img: "https://cvr.ac.in/alumni/images/dpit1.jpeg",
            name: "Deepthi P"
        },
        {
            img: "https://cvr.ac.in/alumni/images/eie2004.jpeg",
            name: "Suryavamsi G"
        },
        {
            img: "https://cvr.ac.in/alumni/images/srinic.jpg",
            name: "Srinivas C"
        },
        {
            img: "https://cvr.ac.in/alumni/images/sshrn.jpg",
            name: "Shashank Reddy, Chinni Krishna G"
        },
        {
            img: "https://cvr.ac.in/alumni/images/yash.png",
            name: "G Yashwanth Reddy"
        },
        {
            img: "https://cvr.ac.in/alumni/images/meghana.png",
            name: "S Sai Meghana and Tirupathi"
        },
        {
            img: "https://cvr.ac.in/alumni/images/raghu.png",
            name: "Raghuveer Ramkumar"
        },
        {
            img: "https://cvr.ac.in/alumni/images/sshrn.jpg",
            name: "Harsh H Shah"
        },
        {
            img: "https://cvr.ac.in/alumni/images/dasika.png",
            name: "Hitesh Kumar Dashika"
        },
        {
            img: "https://cvr.ac.in/alumni/images/chavali.png",
            name: "Chavali Sai Kiran"
        },
        {
            img: "https://cvr.ac.in/alumni/images/pritish.png",
            name: "Pritheesh Panchmahalkar"
        },
        {
            img: "https://cvr.ac.in/alumni/images/sang.png",
            name: "B Sangeetha"
        },
        {
            img: "https://cvr.ac.in/alumni/images/dashika2.png",
            name: "Hitesh Kumar D"
        },
        {
            img: "https://cvr.ac.in/alumni/images/rajesh.png",
            name: "Rajesh Kumar B"
        },
        {
            img: "https://cvr.ac.in/alumni/images/ecemeet.png",
            name: "ECE Alumni Interactions with juniors"
        },
        {
            img: "https://cvr.ac.in/alumni/images/bharatp.png",
            name: "P Bharath Reddy"
        },
        {
            img: "https://cvr.ac.in/alumni/images/varunab.png",
            name: "Varun Abhiramakrishna in BoS meet"
        },
        {
            img: "https://cvr.ac.in/alumni/images/ssr2.jpg",
            name: "Sadashiv K"
        },
        {
            img: "https://cvr.ac.in/alumni/images/sangith.jpg",
            name: "Sangitha and Amulya"
        },
        {
            img: "https://cvr.ac.in/alumni/images/vrtalk.png",
            name: "B Varun Reddy"
        },
        {
            img: "https://cvr.ac.in/alumni/images/dvtalk.png",
            name: "Daniel Vivek"
        },
        {
            img: "https://cvr.ac.in/alumni/images/swathi-keerthi1.jpg",
            name: "Swathi and Keerthi"
        },
        {
            img: "https://cvr.ac.in/alumni/images/SLVtalk.png",
            name: "SCVSLS Ravi Kiran"
        },
        {
            img: "https://cvr.ac.in/alumni/images/reddy.jpg",
            name: "Karthik Reddy"
        },
        {
            img: "https://cvr.ac.in/alumni/images/2014-ece.jpg",
            name: "Murali Krishna, Mahesh Babu Chittiveri, Challa Shiva"
        },
        {
            img: "https://cvr.ac.in/alumni/images/vijay_neeli.jpg",
            name: "Vijaya Bhaskara Neeli"
        },
        {
            img: "https://cvr.ac.in/alumni/images/rajitha-1.jpeg",
            name: "Dr B Rajitha"
        },
        {
            img: "https://cvr.ac.in/alumni/images/st222.jpg",
            name: "Dr Srinivas Tirunagari"
        }
    ]


    function createCard(props) {
        return (
            <div className="col col-lg-4 col-md-6 col-sm-12 alumniGalleryCard" data-aos="fade-zoom-in" data-aos-anchor-placement="top-bottom">
                <img src={props.img} alt="alumni" />
                <p>{props.name}</p>
            </div>
        )
    }


    return (
        <div className="alumniGallery">
            <h2 className="alumniGalleryHead">Alumni Interaction Image Gallery</h2>
            <div className="container">
                <div className="row" style={{ margin: "0" }}>
                    {images.map(createCard)}
                </div>
            </div>
        </div>
    )
}