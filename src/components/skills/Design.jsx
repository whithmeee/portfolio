import React from 'react';
import material from '../../assets/material.png';

const Design = () => {
    return (
        <div className="design">
            <h3>Design Tools</h3>

            <ul>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48">
                        <path
                            fill="#333"
                            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        />
                        <path
                            fill="#0ACF83"
                            d="M19.2 38.3999C21.851 38.3999 24 36.2509 24 33.5999V28.7999H19.2C16.549 28.7999 14.4 30.949 14.4 33.5999C14.4 36.2509 16.549 38.3999 19.2 38.3999Z"
                        />
                        <path
                            fill="#A259FF"
                            d="M14.4 24C14.4 21.349 16.549 19.2 19.2 19.2H24V28.8H19.2C16.549 28.8 14.4 26.6509 14.4 24Z"
                        />
                        <path
                            fill="#F24E1E"
                            d="M14.4 14.4C14.4 11.749 16.549 9.59998 19.2 9.59998H24V19.2H19.2C16.549 19.2 14.4 17.0509 14.4 14.4Z"
                        />
                        <path
                            fill="#FF7262"
                            d="M24 9.59998H28.8C31.451 9.59998 33.6 11.749 33.6 14.4C33.6 17.0509 31.451 19.2 28.8 19.2H24V9.59998Z"
                        />
                        <path
                            fill="#1ABCFE"
                            d="M33.6 24C33.6 26.6509 31.451 28.8 28.8 28.8C26.149 28.8 24 26.6509 24 24C24 21.349 26.149 19.2 28.8 19.2C31.451 19.2 33.6 21.349 33.6 24Z"
                        />
                    </svg>

                    <span>Figma</span>
                </li>

                <li>
                    <img src={material} alt="material" />
                    <span>Materail UI</span>
                </li>
            </ul>
        </div>
    );
};

export default Design;
