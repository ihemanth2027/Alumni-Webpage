import React from "react";
import "./Form.css";
export default function RegistrationForm(props) {
    return (props.trigger) ? (
        <div className="registrationForm">
            <div className="formBg">
                <div className="registrationContainer row">
                    <button className="closeBtn" onClick={props.close}>X</button>
                    <h2>CVRCE ALUMNI ASSOCIATION
                        <br />
                        (Regd.No.486 of 2007)
                    </h2>
                    <div className="col-md-6 formContent">
                        <div className="form-group">
                            First Name
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            Last Name
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            Course Studied
                            <select class="form-select" aria-label=".form-select-sm example">
                                <option selected>Select Your Course</option>
                                <option>B Tech-CSE</option>
                                <option>B Tech-CIVIL</option>
                                <option>B Tech-ECE</option>
                                <option>B Tech-EEE</option>
                                <option>B Tech-EIE</option>
                                <option>B Tech-IT</option>
                                <option>B Tech-MECH</option>
                                <option>M Tech-CSE</option>
                                <option>M Tech-CIVIL</option>
                                <option>M Tech-ECE</option>
                                <option>M Tech-EEE</option>
                                <option>M Tech-EIE</option>
                                <option>M Tech-IT</option>
                                <option>M Tech-MECH</option>
                                <option>M Tech-VLSI DESIGN</option>
                                <option>M Tech-Embedded Systems</option>
                                <option>M Tech-Electrical Power Engineering</option>
                                <option>M Tech-Wireless and Mobile Communication</option>
                                <option>M Tech-Structural Engineering</option>
                                <option>MCA</option>
                                <option>MBA</option>
                            </select>
                        </div>
                        <div className="form-group">
                            Year Of Passing
                            <input type="number" className="form-control" placeholder="Year Of Passing" min="2005" max="2023" />
                        </div>
                        <div className="form-group">
                            Phone Number
                            <input type="number" className="form-control" placeholder="Phone Number" pattern="{15}" />
                        </div>
                        <div className="form-group">
                            Email ID
                            <input type="email" className="form-control" placeholder="Email ID" />
                        </div>
                        <div className="form-group">
                            DoB
                            <input type="date" className="form-control" placeholder="Date Of Birth" />
                        </div>
                        <div className="form-group">
                            Highest Academic Qualification
                            <input type="text" className="form-control" placeholder="Highest Academic Qualification" />
                        </div>
                        <div className="form-group">
                            University Studied (Highest Qualification)
                            <input type="text" className="form-control" placeholder="University Studied" />
                        </div>
                        <div className="form-group">
                            <div>
                                <div>Marital Status</div>
                                <label className="radio inline">
                                    <input type="radio" value="married" name="marital" checked></input>
                                    <span style={{ marginRight: "15px" }}>Married</span>
                                </label>
                                <label className="radio inline">
                                    <input type="radio" value="unmarried" name="marital" checked></input>
                                    <span>Unmarried</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>Hobbies</div>
                            <textarea className="form-control"></textarea>
                        </div>

                    </div>
                    <div className="col-md-6 formContent">
                        <div className="form-group">
                            Profession
                            <input type="text" className="form-control" placeholder="Profession" />
                        </div>
                        <div className="form-group">
                            Current Organization
                            <input type="text" className="form-control" placeholder="Your Organization" />
                        </div>
                        <div className="form-group">
                            Your Role
                            <input type="text" className="form-control" placeholder="Your Role" />
                        </div>
                        <div className="form-group">
                            Achievements
                            <textarea className="form-control" placeholder="Achievements/Recognitions"></textarea>
                        </div>
                        <div className="form-group">
                            <div>Your Address</div>
                            <input type="text" className="form-control" placeholder="City" />
                            <input type="text" className="form-control" placeholder="Country" />
                        </div>
                        <div className="form-group">
                            <div>Where did your life take you after CVR?</div>
                            <textarea className="form-control" placeholder="Where did life take after CVR *"></textarea>
                        </div>
                        <div className="form-group">
                            <div>Fondest Memories of life at CVR College of Engineering</div>
                            <textarea className="form-control" placeholder="Fondest Memories of life at CVR College of Engineering *"></textarea>
                        </div>
                        <div class="form-group">
                            Are you an Entrepreneur?
                            <select id="test" className="form-control">
                                <option className="hidden" selected="" disabled="">Please select your Option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div id="hidden_div" style={{ display: "none" }}>
                            <div class="form-group">
                                Name of the Company
                                <input type="text" className="form-control" placeholder="Name of the Company *" />
                            </div>
                            <div className="form-group">
                                Description about the Company
                                <textarea className="form-control" placeholder="Description about the Company/URL *"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 mt-2">
                                <button className="btn  form-control uploadPicBtn" type="button">Upload Fondest Pic on Campus</button>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"1rem"}}>
                            <div className="col-md-10 mt-2">
                            <button className="btn  form-control uploadPicBtn" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}