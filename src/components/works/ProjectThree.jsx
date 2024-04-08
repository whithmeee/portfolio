import sneakers from "../../assets/sneakers.png";

const ProjectThree = () => {
    return (
        <div className="pro pro__1 undefined">
            <div className="pro__img">
                <div>
                    <img
                        className="sneakers-img"
                        src={sneakers}
                        alt="sneakers"
                    />
                </div>
            </div>
            <div className="pro__text">
                <h3>Sneakers-Shop</h3>
                <p>
                    Приложения для покупок, кроссовок и одежды, можно
                    авторизоваться на сайте, что позволить просматривать свои
                    покупки после оформление заказ (все заказы улетают на
                    бэкенд), сделан поиск, роутинг по страницам, детальная
                    информцию о продукте, табы, модальное окно.
                    <span className="pro__ps">
                        P.S. Функционал будет разростаться... :)
                    </span>
                </p>
                <div className="stack">
                    <p>React JS</p>
                    <p>TypeScript</p>
                    <p>Redux-Toolkit</p>
                    <p>React Router V6</p>
                    <p>Авторизация с JWT</p>
                    <p>Axios</p>
                    <p>Module CSS</p>
                </div>
                <div className="links">
                    <a
                        href="https://github.com/whithmeee/sneakers"
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
                        href="https://react-sneakers-shop.netlify.app/"
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

export default ProjectThree;
