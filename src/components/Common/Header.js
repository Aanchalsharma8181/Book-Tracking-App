import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import BookModal from '../Core/BookModal';

function Header({
    setBookData, bookData
}) {
    const [isDark, setIsDark] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const forDark = `
    body{
        background-color:black;
        color:white
    }
    `;

    const forLight = `
    body{
        background-color:white;
        color:black;
    }
    `;

    return (
        <div>
            {
                isDark ? <style>{forDark}</style> : <style>{forLight}</style>
            }
            <BookModal from="header" setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setBookData={setBookData} bookData={bookData} />
            <Navbar
                color="primary"
                dark
            >
                <NavbarBrand href="/">
                    Book Tracking App
                </NavbarBrand>
                

                <div style={{
                    display: "flex"
                }}>
                    <button color='warning' className='btn btn-light' onClick={() => setIsDark(!isDark)} style={{
                        position: "absolute",
                        top: "10px",
                        right: "120px",
                        height: "37px",
                        width: "40px"
                    }}>
                        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                    </button>
                    <div>
                        <button className='btn btn-light'
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                fontFamily: "sans-serif",
                                fontWeight: "200"
                            }}>
                            Add Book
                            
                        </button>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;