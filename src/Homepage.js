import React from "react";
import "./Homepage.css";
import Fab from '@material-ui/core/Fab';
import PhoneIcon from '@mui/icons-material/Phone';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";


function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage_header">
                <h3>Ambulance Bhubaneshwar</h3>
                <div className="homepage_headerMiddle">
                    <button>HOME</button>
                    <button>SERVICE</button>
                    <button>ABOUT US</button>
                </div>
                <div className="homepage_headerRight">
                    <Fab variant="extended"><PhoneIcon />CONTACT US</Fab>
                </div>
            </div>
            <div className="homepage_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac. Semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue.</p>
                <div className="homepage_contentRight">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac. Semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue.</p>
                </div>
            </div>
            <div className="homepage_imageSlider">
                <ImageSlider slides={SliderData} />
            </div>
        </div>
    )
}

export default Homepage;