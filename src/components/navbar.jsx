import styles from "./navbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import Login from "./login.jsx";
import {useContext, useState} from "react";
import Register from "./register.jsx";
import {DataContext} from "../utils/utils.js";

const Navbar = ({currentPage}) => {

    const navigate = useNavigate();
    const {user, handleLogout} = useContext(DataContext);
    const [popup, setPopup] = useState(false);
    const [login, setLogin] = useState(true);

    const getClassName = (name) => {
        return name === currentPage ? styles.active : '';
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.top}>
                    <div onClick={() => navigate("/")}>
                        <h1>REMINISCE</h1>
                        <i className={styles.logo}></i>
                        <h1>VISUALS</h1>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.group}>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                            <span>+639 948-623-9661</span>
                        </div>
                        <div className={styles.group}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                            <span>reminiscevisuals@gmail.com </span>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <ul>
                        <li><Link to="/home" className={getClassName("home")}>Home</Link></li>
                        <li><Link to="/about" className={getClassName("about")}>About</Link></li>
                        <li><Link to="/services" className={getClassName("services")}>Services</Link></li>
                        <li><Link to="/gallery" className={getClassName("gallery")}>Gallery</Link></li>
                        <li><Link to="/book" className={getClassName("book")}>Book Us</Link></li>
                        <li><Link to="/pricing" className={getClassName("pricing")}>Pricing</Link></li>
                    </ul>
                    {user ? <button onClick={() => {
                        handleLogout();
                        navigate("/");
                    }}>Logout</button> : <button onClick={() => setPopup(true)}>Sign In</button>}
                </div>
            </section>
            {popup && (login ? <Login setVisible={setPopup} setView={setLogin}/> : <Register setVisible={setPopup} setView={setLogin}/>)}
        </>
    )
}

export default Navbar;