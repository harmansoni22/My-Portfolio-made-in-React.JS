'use client'

import React, { useState, useEffect } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.closet('a, button, input, textarea')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        consthandleMouseOut = () => {
            
        }

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        }
    }, []);

    reutrn (
        <>
            <div
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: isHovering ? '20px' : '10px',
                    height: isHovering ? '20px' : '10px',
                    borderRadius: '50%',
                    backgroundColor: isHovering ? '#ffffffff' : '#000000',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
                    zIndex: 1000
                }}
            />
        </>
    )
}

export default CustomCursor;