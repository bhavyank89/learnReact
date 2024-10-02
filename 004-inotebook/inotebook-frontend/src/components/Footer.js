import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#B5C18E', padding: '10px 0', textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }} className='d-flex position-absolute-end'>
            <p style={{ marginBottom: '0', fontFamily: 'Arial, sans-serif', fontSize: '16px', marginLeft: "50px" }}>
                "Capture your thoughts, secure your ideas - iNotebook, your digital safe."
                <div style={{ marginLeft: '600px', display: "inline" }}>
                    <a href="https://github.com/bhavyank89" target="_blank" rel="noopener noreferrer" style={{ color: '#B5C18E', marginRight: '15px', fontSize: '24px' }} className='mx-2'>
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/bha_v76/" target="_blank" rel="noopener noreferrer" style={{ color: '#B5C18E', fontSize: '24px' }} className='mx-2'>
                        <FaInstagram />
                    </a>
                </div>
            </p>
            {/* <div style={{ marginTop: '10px' }}>
                <a href="https://github.com/bhavyank89" target="_blank" rel="noopener noreferrer" style={{ color: '#B5C18E', marginRight: '15px', fontSize: '24px' }}>
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/bha_v76/" target="_blank" rel="noopener noreferrer" style={{ color: '#B5C18E', fontSize: '24px' }}>
                    <FaInstagram />
                </a>
            </div> */}
        </footer>
    );
};

export default Footer;
