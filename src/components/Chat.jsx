import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaCommentDots } from 'react-icons/fa';

const ChatToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-5 right-5 flex items-center space-x-3">
            {isOpen && (
                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition duration-300"
                >
                    <FaWhatsapp size={30} />
                </a>
            )}

            <button
                onClick={toggleChat}
                className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 
                    ${isOpen ? 'bg-red-500 text-white' : 'bg-gray-600 text-white'}`}
            >
                {isOpen ? <FaTimes size={35} /> : <FaCommentDots size={35} />}
            </button>
        </div>
    );
};

export default ChatToggle;