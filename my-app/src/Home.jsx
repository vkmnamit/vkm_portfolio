import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Home() {
    return (
        <motion.div
            className="home_wrap"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
        >
            <div className="home_container">
                <div className="name_right">
                    <h1 className="name">Vkm namit</h1>
                    <div className="name_right_desc">
                        <p className="description1" style={{ marginRight: "150px", marginBottom: "32px", color: "#000000ff" }}>Web Developer & Designer based in India</p>
                        <Link to="/project">
                            <p className="description2" style={{ marginBottom: "48px", textDecoration: "none", color: "#000", zIndex: 1 }}>Selected Works</p>
                        </Link>
                    </div>
                </div>
                <div className="name_left">
                    <div className="name_left_img">
                        <img src="/1761683160584.jpg" alt="Profile Picture" className="profile_picture" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}