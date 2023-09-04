import React from 'react'
export default function Videos() {
    function createVideo(props) {
        return (
            <div className="col col-lg-4 col-md-6 col-sm-12 videoParent">
                <video autoplay muted controls className="video">
                    <source src={props} />
                </video>
            </div>
        )
    }
    const videos = [
        "https://cvr.ac.in/alumni/images/Bayareavid1.mp4",
        "https://cvr.ac.in/alumni/images/dallasvid1.mp4",
        "https://cvr.ac.in/alumni/images/swathy.mp4",
        "https://cvr.ac.in/alumni/images/dallas.mp4"
    ]
    return (
        <div className="row videoContainer">
            {videos.map(createVideo)}
        </div>
    )
}