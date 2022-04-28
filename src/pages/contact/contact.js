import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import '../../components/styles/info_style.css';
import './css/contact.module.css';
import call from './images/call.png';
import location from './images/location.png';
import email from './images/email.png';
import instagram from './images/instagram.webp';
import twitter from './images/twitter.webp';
import fb from './images/fb.png';

function Contact() {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       // const textarea = event.target.value;
        setInputs(values => ({ values, [name]: value }))
        setTextarea(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container"> <h2 class='about-header' style={{textAlign: "center"}}><strong>Contact Us</strong></h2>
        <p style={{padding: "20px", borderLeft: "5px solid black", backgroundColor: "#e7ebf1"}}>You can reach out to Restaurant99 through any of these channels and we're always ready to serve you better.</p>
            <div class="incontainer" style={{display: "inline-flex", width: "100%"}}>
                <div class="subcontainer" style={{textAlign: "center", margin: "20px", flex: "1"}}>
                    <img src={location} alt="location" width={50} height={50}/>
                    <p><b>Address:</b> 1, Awolowo Way, Ikoyi, Lagos, Nigeria
                    </p>
                    <img src={call} alt="call" width={50} height={50}/>
                    <p><b>Phone:</b> +2348012345678</p>
                    <img src={email} alt="email" width={50} height={50}/>
                    <p><b>Email:</b> restaurant99desk@restaurant99.com</p>
                    <img src={fb} alt="fb" width={50} height={50}/>
                    <p><b>Facebook:</b> Restaurant99</p>
                    <img src={twitter} alt="twitter" width={50} height={50}/>
                    <p><b>Twitter:</b> restaurant99</p>
                    <img src={instagram} alt="instagram" width={50} height={50}/>
                    <p><b>Instagram:</b> restaurant99</p>
                </div> 

                <div class="subcontainer" style={{textAlign: "left", margin: "20px", flex: "2"}}>
                    <form onSubmit={handleSubmit} class="formwidth">
                        <label for="fname">Name:</label>
                        <input type="text" name="fname" value={inputs.fname || ""} onChange={handleChange} placeholder="Please enter your full name" />
                        <label for="email">Email:</label>
                        <input type="text" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Please enter your correct email address" />
                        <label for="message">Message: </label>
                        <textarea row="10" column="40" value={textarea} onChange={handleChange} placeholder="Please type your message here..." />
                        <input type="submit" value={"Send Message"} style={{width: "auto"}}/>
                    </form>
                </div> 
            </div>   
        </div>
    );
}

export default Contact;