import styles from "./register.module.css";
import {useContext, useState} from "react";
import axios from "axios";
import {DataContext, STRAPI_URL} from "../utils/utils.js";
import {useNavigate} from "react-router-dom";

const Register = ({setVisible, setView}) => {

    const {handleLogin} = useContext(DataContext);

    const navigate = useNavigate();

    const dataFormat = () => ({username: "", email: "", password: "", confirm_password: ""});

    const [formData, setFormData] = useState(dataFormat());

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${STRAPI_URL}/api/auth/local/register`, formData)
            .then(res => {
                const {user, jwt} = res.data;
                handleLogin({...user, token: jwt});
                setVisible(false);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmit}>
                <span onClick={() => setVisible(false)}>&times;</span>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username *" name="username" onChange={handleChange}/>
                <input type="email" placeholder="Email *" name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password *" name="password" onChange={handleChange}/>
                <input type="password" placeholder="Confirm Password *" name="confirm_password" onChange={handleChange}/>
                <button type="submit">SUBMIT</button>
                <p>Already have an account? <a onClick={() => setView(true)}>Sign In</a></p>
            </form>
        </section>
    )
}
export default Register;
