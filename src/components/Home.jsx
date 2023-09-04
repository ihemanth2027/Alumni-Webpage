import React, { useEffect } from "react";
import "./styles.css";
import "aos/dist/aos.css"
import Aos from "aos";
export default function Home() {
    useEffect(()=>{
        Aos.init({ duration: 1000 })
      },[])
    const contents = [
        {
            h2: "About Us",
            info: "It is a matter of great pride and honour for an Educational Institute when the grandaunts spread their wings and take flight into the infinite sky of career opportunities. CVRCE displays a conviction that old students are priceless possessions and valued emissaries as they have added sheen and lustre to the glory of the institute and raised the banner of our college higher. In order to foster and strengthen the bond between the alma mater and the alumni, the college has registered Alumni Association during the year 2007 with the Regd # 486. The department level Alumni groups are invoked and the Alumni that are spread across the Globe are allured to join the alumni network."
        },
        {
            h2: "Under the Neem Trees..",
            info: "In retrospect of the 20 years of journey of CVR College of Engineering, here we stand proudly looking at what we gave back to the society. Yes..! Our beloved students are now the torch bearers of this proud legacy in the society and we love to shout on the roof top about you and your accomplishments. And this is the soulful sole purpose behind the registration of the Alumni Association a while ago. The Alumni team is determined to strengthen the Alumni network and spread its wings far and wide. Not just nostalgia, you shall have a lot of events to participate in, your stories to be added to our wall of fame, your knowledge sharing sessions which can inspire your super juniors in the campus, and of course if you want to volunteer for anything more..! CVR College of Engineering has been a place where the boundaries between teachers and students eventually blurred so beautifully that your teachers became your mentors and friends for a lifetime thereafter. It has been a place which instilled a silent confidence and understanding within a person so when you walked out of the gates you were ready to deal with any challenges you faced.And this is the soulful sole purpose behind the registration of the Alumni Association a while ago.The Alumni team is determined to strengthen the Alumni network and spread its wings far and wide.Not just nostalgia, you shall have a lot of events to participate in, your stories to be posted to our wall of fame, your knowledge sharing sessions which can inspire your super juniors in the campus, and of course if you want to volunteer for anything more..! CVR College of Engineering has been a place where the boundaries between teachers and students eventually blurred so beautifully that your teachers became your mentors and friends for a lifetime thereafter.It has been a place which instilled a silent confidence and understanding within a person so when you walked out of the gates you were ready to deal with any challenges you faced."
        },
        {
            h2: "Classroom “The Cave”",
            info: "While you struggled to keep your head above water with the stupendous lectures on physics, chemistry, maths and all your core subjects as tension soared up writing exams with hysterical tears and overcoming distractions during those desperate times, the campus was always filled with your laughter, jokes, lighter moments and a sense of togetherness. The dungeon of exam fear lost its sinister gloom as you moved from first year to next years progressively taking on a cozy air of new learnings and more confidence by the day."
        },
        {
            h2: "Campus “The Memories”",
            info: "The buildings with your classrooms, the trees, the basketball fields, the cricket ground, the corridors filled with aroma of snacks during breaks, the physical directors chasing you back to your classes, your sneaking through the readings in the labs, the canteen’s lunch seemingly exotic over you sharing it with your best friends..how can we capture the myriad experiences of everyone of you on just this page.Do you remember even after the last hours bell rang, the campus was still filled with life, laughter and play until your Mr.M.Narender Reddy sir used to give a nod to the college buses and you were running around to catch the buses leaving the campus.There were days when you stayed back to just hang out with friends and catch the research hour buses.The naughty things you did in the buses,…!Ah…you tried your best to evade the PD’s and the gate watchmen from getting caught and having to get your id card snatched.Ha ha ha..what lovely time!!! Is there a way we can do some time travel ?? Don’t you wish you had a time machine and came back swiftly to those days and relive those days again ?? Well…herez a unique opportunity for you we are here for you to register yourself for the CVR Alumni Association.In order to foster and strengthen the bond between the alma mater and the alumni, the college has registered Alumni Association during the year 2007 with the Regd # 486"
        }
    ]

    function contentFn(param) {
        return (
            <div className="contents" data-aos="fade-in-out">
                <h2 className="contentHeading">{param.h2}</h2>
                <p className="contentBody">{param.info}</p>
            </div>
        )
    }
    return (
        <div>
            <img src="./images/image.jpg" alt="" className="welcomePic" />
            <div className="welcomeMsg">
                <h1 id="welcomeMsg1">Welcome To</h1>
                <h1 id="welcomeMsg2">OFFICE OF ALUMNI AFFAIRS</h1>
            </div>
            <div className="mainBodyContentsDiv">{contents.map(contentFn)}</div>
            <div className="gradient" >
                <div className="gradientContent" data-aos="fade-in-out">
                    <h2>VISION</h2>
                    <p>
                        To invite Alumni to serve as active stakeholders of the college who contribute in the pursuit of academic excellence and to make them serve as the ambassadors of the college.
                    </p>
                </div>
                <div className="gradientContent" data-aos="fade-in-out">
                    <h2>MISSION</h2>
                    <p>
                        To welcome all the old students to join Alumni Association
                        To offer an enabling platform for Alumni to serve as an industry interface
                        To present Alumni in the Board of Studies and IQAC and to invite insights and suggestions on new course structure and syllabi
                        To provide incubation facilities for the alumni to translate their ideas into products
                    </p>
                </div>
            </div>
        </div>
    )
}