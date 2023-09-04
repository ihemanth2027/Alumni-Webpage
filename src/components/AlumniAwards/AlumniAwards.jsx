import React from "react";
import ComponentCarousel from "./ComponentCarousel";
export default function AlumniAwards() {
    function create(props, key) {
        return (
            <div className="alumniAwardsInfo" style={key % 2 === 0 ? { backgroundColor: "#c9e3fa;" } : { backgroundColor: "rgb(180, 211, 237)" }}>
                <p>{props}</p>
            </div>
        )
    }
    const info = [
        "Sandeep Reddy V, Akarapu Sisirdath, and Siripuram Vikram (Dept of IT). (2011-15): CVR College of Engineering Gold Medal for the best project.",
        "K Bharghava Charan Reddy and Vemulapalli Divyank (CSE) (2013-17): CVR College of Engineering Gold Medal for the Best Project among of all branches of B.Tech.",
        "Gurajala Tejashwini (ECE)(2014-18): Late Prof. P. Narasimha Reddy Gold Medal for the Best Girl student scoring highest aggregate marks in B.Tech among all the branches .",
        "Gurajala Tejashwini (2014-18): Late Sri. M. Madan Mohan Gold Medal for the student scoring the Highest aggregate in B.Tech (ECE).",
        "Gurajala Tejashwini (2014-18): Smt.Kamala Cherabuddi Memorial Gold Medal and Cash award for over all topper of the College in B.Tech .",
        "Uppala Supriya, Tharun Bathula, and Shiva Krishna G (CSE)(2014-18): CVR College of Engineering Gold Medal for the Best Project among of all branches of B.Tech.",
        "K Nagaraju (2016-18): Gold Medal for the topper of M.Tech among all branches.",
        "Pasupuleti Sri Ram (ECE)(2015-19): Smt.Kamala Cherabuddi Memorial Gold Medal and Cash award for over all topper of the College in B.Tech.",
        "Aishwarya(2015-19): Late Sri. M. Madan Mohan Gold Medal for the student scoring the Highest aggregate in B.Tech (ECE).",
        "Aishwarya (ECE)(2015-19): Late Prof. P. Narasimha Reddy Gold Medal for the Best Girl student scoring highest aggregate marks in B.Tech among all the branches.",
        "V.Raghavendra Krishna Srujan, Ramidi Prasanth Reddy, K.Prudvi Raj Rathod(ECE) (2015-19): Goldmedal for the Best Project .",
        "Vallapu Mahesh(2017-19): Gold Medal- Topper of M.Tech among all branches.",
        "Vandanapu Sowmya (IT)(2015-19): Dr. Chukka Ramaiah Gold Medal for topper in Mathematics & Statistics (Mathematics-I, Mathematics-II, Computational Mathematics, Mathematics – III / Probability & Statistics courses) in B.Tech.",
        "Baddam Harini (ECE)(2016-20): Smt.Kamala Cherabuddi Memorial Gold Medal and Cash award for over all topper of the College in B.Tech.",
        "Baddam Harini(2016-20): Late Sri. M. Madan Mohan Gold Medal for the student scoring the Highest aggregate in B.Tech (ECE) .",
        "Baddam Harini(2016-20): Late Prof. P. Narasimha Reddy Gold Medal for the Best Girl student scoring highest aggregate marks in B.Tech among all the branches.",
        "K. Aparna(2018-20): Award to topper of M.Tech among all branches (Gold Medal).",
        "Gudimalla Sireesha (ECE)(2016-20): Dr. Chukka Ramaiah Gold Medal for topper in Mathematics & Statistics(Mathematics-I, Mathematics-II, Computational Mathematics, Mathematics – III / Probability & Statistics courses) in B.Tech.",
        "Ganjam Karthik (ECE) (2017-21): Smt.Kamala Cherabuddi Memorial Gold Medal and Cash award for over all topper of the College in B.Tech.",
        "Ganjam Karthik(2017-21): Late Sri. M. Madan Mohan Gold Medal for the student scoring the Highest aggregate in B.Tech (ECE) .",
        "M R Niharika(2017-21): Late Prof. P. Narasimha Reddy Gold Medal for the Best Girl student scoring highest aggregate marks in B.Tech among all the branches .",
        "Doti Sai Rani(2017-21): Award to topper of M.Tech among all branches (Gold Medal).",
        "CH. Suryapavan, S. Sriteja, and P. Venkata Phani Kumar (ME) (2017-21): CVR College of Engineering Gold Medal for the Best Project among of all branches of B.Tech.",
        "Chavva Yojitha Sai Lakshmi (CSE)(2017-21): Dr. Chukka Ramaiah Gold Medal for topper in Mathematics & Statistics(Mathematics-I, Mathematics-II, Computational Mathematics, Mathematics – III / Probability & Statistics courses) in B.Tech.",
        "Battula Tanmayee (2018-22): Smt.Kamala Cherabuddi Memorial Gold Medal and Cash award for over all topper of the College in B.Tech.",
        "Battula Tanmayee (2018-22): Late Sri. M. Madan Mohan Gold Medal for the student scoring the Highest aggregate in B.Tech (ECE) .",
        "Battula Tanmayee (2018-22): Late Prof. P. Narasimha Reddy Gold Medal for the Best Girl student scoring highest aggregate marks in B.Tech among all the branches.",
        "Banala Shivani(2018-22): Gold Medal to the topper of M.Tech among all branches.",
        "Thaviti Sushanth Kumar, Pappu Pranay, and Guduru Praneeth Reddy (ECE) (2018-22): CVR College of Engineering Gold Medal for the Best Project among of all branches of B.Tech .",
        "Danda Pranathi(2018-22): Dr. Chukka Ramaiah Gold Medal for topper in Mathematics & Statistics(Mathematics-I, Mathematics-II, Computational Mathematics, Mathematics – III / Probability & Statistics courses) in B.Tech."
    ]


    return (
        <div>
            <ComponentCarousel />
            <div className="alumniAwards">
                <h1>Goldmedals</h1>
                <p className="sponser">Sponsored by Cherabuddi Education Society</p>
                {info.map(create)}
            </div>
        </div>
    )
}