import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

function Box1() {
    const [text, setText] = useState('');
    const fullText = 'Frontend Developer';
    const delay = 100; // delay in milliseconds
    const timeoutRef = useRef(null);

    useEffect(() => {
        let isAdding = true;
        let index = 0;

        const animateText = () => {
            if (isAdding) {
                if (index < fullText.length) {
                    setText(fullText.slice(0, index + 1));
                    index++;
                    timeoutRef.current = setTimeout(animateText, delay);
                } else {
                    isAdding = false;
                    timeoutRef.current = setTimeout(animateText, delay);
                }
            } else {
                if (index > 0) {
                    setText(fullText.slice(0, index - 1));
                    index--;
                    timeoutRef.current = setTimeout(animateText, delay);
                } else {
                    isAdding = true;
                    timeoutRef.current = setTimeout(animateText, delay);
                }
            }
        };

        animateText();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="main-1">
                <div className='align-center'>
                    <h1>
                        <p className='p1 text-sm md:text-lg lg:text-2xl'>I am a </p>
                        <p className='p2 text-sm md:text-lg lg:text-2xl'>{text}</p>
                    </h1>
                </div>
                <div className="para">
                    <p className='info'>
                        Hi, I'm <span style={{ fontWeight: 'bold' }}>Bhuwan Bhashkar</span>. I'm passionate about Frontend Developing, whether it's part of Web Developing. I enjoy my Passion. Looking forward to connecting and sharing ideas!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Box1;
