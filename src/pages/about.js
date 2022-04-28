import './styles/info_style.css';
import faisal from './restaurant99/faisal.jpg';
function About() {
    return (
        <div class="container"><div class="subcontainer">
            <img src={faisal} height="0px" width="0px" alt="faisal"/>;
            <h2 className='about-header'><strong>About Us Page</strong></h2>
            <p style={{padding: "20px", borderLeft: "5px solid black", backgroundColor: "#e7ebf1"}}>Restaurant99 is comitted to providing you with the best of services. Our services is inline with the local and international standard. Restaurant99 is back by group of great teams who are aim at giving the best services to their clients. Our teams comprises of expertise of different field of specialisation.</p>
            <h2 style={{textAlign: "center"}}>Our Mission</h2>
            <p>Lorem ipsum</p>
            <h2 style={{textAlign: "center"}}>Our Vision</h2>
            <p>Lorem ipsum</p>
            <h2 style={{textAlign: "center"}}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={faisal} alt="Mike" height={300} style={{width:"100%"}} />
                        <div class="container1">
                            <h2>Ola</h2>
                            <p class="title">Visual Provider</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <div><p>mustaphamarizuk98</p><p>@gmail.com</p></div>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={faisal} alt="Mike" height={300} style={{width:"100%"}} />
                        <div class="container1">
                            <h2>TH</h2>
                            <p class="title">Senior Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <div><p>mustaphamarizuk98</p><p>@gmail.com</p></div>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={faisal} alt="Mike" height={300} style={{width:"100%"}} />
                        <div class="container1">
                            <h2>Marzuq Marzuq</h2>
                            <p class="title">Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <div><p>mustaphamarizuk98</p><p>@gmail.com</p></div>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={faisal} alt="Mike" height={300} style={{width:"100%"}} />
                        <div class="container1">
                            <h2>Marzuq</h2>
                            <p class="title">Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <div><p>mustaphamarizuk98</p><p>@gmail.com</p></div>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={faisal} alt="Mike" height={300} style={{width:"100%"}} />
                        <div class="container1">
                            <h2>Marzuq</h2>
                            <p class="title">Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <div><p>mustaphamarizuk98</p><p>@gmail.com</p></div>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
                );
                }

export default About;