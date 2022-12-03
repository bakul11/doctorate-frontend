import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';


const ScrollTop = () => {

    const [visiable, setVisiable] = useState(false);

    const handleBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    }

    const scrollBTn = () => {
        const scrollHeight = 300;
        const height = document.body.scrollTop || document.documentElement.scrollTop;

        if (height > scrollHeight) {
            setVisiable(true)
        } else {
            setVisiable(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', scrollBTn)
    }, [])



    const scrollBtn = {
        position: 'fixed',
        padding: '5px 10px',
        fontSize: '20px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#b95225',
        color: '#fff',
        textAlign: 'center',
        border: 'none',
        borderRadius: '10px'
    }

    return (
        <div>
            {
                visiable ? <button
                    onClick={handleBtn}
                    style={scrollBtn}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button> : ''
            }

        </div>
    );
};

export default ScrollTop;