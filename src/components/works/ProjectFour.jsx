import React from "react";
import chat from "../../assets/chat.png";

const ProjectFour = () => {
    return (
        <div className="pro pro__1 undefined">
            <div className="pro__img">
                <div>
                    <a
                        href="https://chatonlinereact.netlify.app/"
                        target="blank"
                    >
                        <img src={chat} alt="#" />
                    </a>
                </div>
            </div>
            <div className="pro__text">
                <h3>React-Chat</h3>
                <p>
                    Chat в режиме реального времени, в комнату может зайти любое
                    кол-во человек, достаточно ввести имя и номер комнаты
                </p>
                <div className="stack">
                    <p>React JS</p>
                    <p>Node JS</p>
                    <p>Express JS</p>
                </div>
                <div className="links">
                    <a
                        href="https://github.com/whithmeee/chat-client"
                        target="_blank"
                    >
                        Code
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="tabler-icon tabler-icon-brand-github"
                        >
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </a>
                    <a
                        href="https://chatonlinereact.netlify.app/"
                        target="_blank"
                    >
                        Live Demo
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="tabler-icon tabler-icon-external-link"
                        >
                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                            <path d="M11 13l9 -9"></path>
                            <path d="M15 4h5v5"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectFour;
