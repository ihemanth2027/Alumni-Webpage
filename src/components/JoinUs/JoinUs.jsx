import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

export default function JoinUs() {

    const [trigger, setTrigger] = useState(false);

    function handleClick() {
        setTrigger(true)
    }
    function handleClose() {
        setTrigger(false);
    }

    return (
        <div >
            <div className="joinUs">
                <p className="quote">❝</p>
                <div className="joinUsMsg">
                    <p>
                        Hey There !!!
                        <br /><br />
                        It’s said that our lives are basically made up of memories, memories that stir emotions, Invoke nostalgia, melancholy, Happiness, and Joy…
                        <br /><br />
                        I have been witness to this all,
                        To the genesis of those magical moments,
                        Of our journey ..!
                        <br /><br />
                        Every brick, mortar, and piece of wood
                        Carry in them vivid stories of you, of me and our association.
                        <br /><br />
                        I am a piece of you, you are a piece of me
                        <br /><br />
                        I am CVRCE …
                        <br /><br />
                        20 years ago I rose from the rubble, built into an institution,
                        Standing strong through changing weathers and the test of times,
                        I am at the forefront of academic excellence,
                        Delivering success and Innovation…
                        <br /><br />
                        All of this, would not have been possible without you,
                        You have made this journey a beautiful one to remember
                        You took that leap of faith with me to carry you through the tide of the most important years of your life.
                        <br /><br />
                        And this success, I wish to share with you, my friend …
                        <br /><br />
                        As I celebrate my 20th Birthday, I would be glad to have you around,
                        Let’s share some stories,
                        Let’s take that walk down the memory lane
                        And let’s make this group a vibrant one ….
                        <br /><br /><br /><br /><br /><br />
                        <span className="register">
                            <h3>Please find the above link to register</h3>
                            <button onClick={handleClick}>
                                Register
                            </button>
                        </span>
                    </p>
                </div>
                <div>
                    <img src="./images/deshpande.png" alt="alumni" className="joinUsAlumniImg" />
                </div>
            </div>

            <RegistrationForm trigger={trigger} close={handleClose}>

            </RegistrationForm>

        </div>
    )
}