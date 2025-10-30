import "./Project.css";
import { Link } from "react-router-dom";
export default function Project() {
    return (
        <div className="about_container">
            <div className="navbar">
                <div className="logo"><h1 style={{ color: "black" }}>Vkmnamit</h1>
                </div>
                <div className="component_navbar">


                    <Link to="/contact"><p aria-label="Go to contact">Contact</p></Link>


                </div>
            </div>
            <div className="highlight">
                <div className="card_highlight">
                    <video autoPlay muted playsInline className="project-video" controls >
                        <source src="/Screen Recording 2025-10-29 at 4.46.16 PM.mp4" type="video/mp4" />



                    </video>


                </div>
            </div>
            <div className="intro_me" id="about">
                <span className="intro1">I'm Vkmnamit, a web developer & designer with a passion for creating beautiful and functional web experiences.</span> <span className="intro2">I specialize in turning ideas into reality through clean and efficient code and making user-friendly interfaces.</span>
            </div>
            <div className="skill" id="skills">
                <h1>Skills that I have honed to deliver exceptional results.</h1>
                <div className="skill_list">
                    <ol>
                        <li>Turning ideas into scalable, high-performance web realities.</li>
                        <li>From scalable web applications to optimized backend architectures.</li>
                        <li>Responsive Web Design</li>
                        <li>UI/UX Design Principles</li>
                        <li>Scalable web solutions and intuitive frontends.</li>
                        <li>Crafting responsive and scalable digital products.</li>
                        <li>Web Performance Optimization</li>

                    </ol>

                </div>
                <div className="project_list" id="projects">
                    <h1 style={{ marginTop: "80px" }}>Glimpse of My Work</h1>

                    <div className="project_highlight">
                        <span className="project-card">
                            <h1>Personal Stock Dashboard</h1>

                            <div className="project-details">
                                <p className="project-description">
                                    A personal stock dashboard web application that provides real-time stock
                                    market data, portfolio tracking, and customizable watchlists. Built with
                                    React for the frontend and Node.js for the backend, it offers a seamless
                                    user experience with interactive charts and data visualization.
                                </p>

                                <div className="img_list">
                                    <img src="/stock1.png" alt="screen1" />
                                    <img src="/stock2.png" alt="screen2" />
                                    <img src="/stock3.png" alt="screen3" />
                                    <img src="/stock4.png" alt="screen4" />
                                    <img src="/stock5.png" alt="screen5" />
                                    <img src="/stock6.png" alt="screen6" />
                                    <img src="/stock7.png" alt="screen7" />
                                    <img src="/stock8.png" alt="screen8" />
                                    <img src="/stock9.png" alt="screen9" />


                                </div>
                            </div>
                        </span>

                    </div>

                </div>
            </div>


        </div>

    );
}
