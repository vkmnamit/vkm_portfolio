import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Into.css";
import emailjs from '@emailjs/browser';

export default function Into() {
    const navigate = useNavigate();
    const letters = "Vkmnamit".split("");
    const [showPortfolio, setShowPortfolio] = useState(false);

    useEffect(() => {

        const stagger = 80;
        const letterAnim = 400;
        const lettersTotal = (letters.length - 1) * stagger + letterAnim;


        const portfolioDelay = lettersTotal + 200;
        const portfolioAnim = 600;
        const extraDelay = 180;


        const exitDelay = portfolioDelay + portfolioAnim + 250 + extraDelay;
        const t1 = setTimeout(() => {

            const container = document.querySelector('.intro-container');
            if (container) container.classList.add('letters-animate');
        }, 50);

        const t2 = setTimeout(() => setShowPortfolio(true), portfolioDelay);

        const t3 = setTimeout(() => {
            const container = document.querySelector('.intro-container');
            if (container) {
                container.classList.add('intro-exit');


                const exitDuration = 800;

                const overlap = 400;
                const whenToNavigate = Math.max(0, exitDuration - overlap);


                setTimeout(() => navigate('/home'), whenToNavigate);
            } else {
                navigate('/home');
            }
        }, exitDelay);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [navigate, letters.length]);

    return (
        <div className="intro-container " style={{ padding: 0, margin: 0, boxSizing: 'border-box', backgroundColor: '#121212', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className="intro-line">
                {letters.map((ch, i) => (
                    <motion.span
                        className="intro-letter"
                        key={i}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.18, type: 'spring', stiffness: 400, damping: 22 }}
                    >
                        {ch}
                    </motion.span>
                ))}
            </h1>

            {showPortfolio && (
                <motion.h2
                    className="intro-portfolio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    @Portfolio 2025
                </motion.h2>
            )}


        </div>

    );
}