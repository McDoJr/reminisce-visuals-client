import styles from "./login.module.css";
import {useContext, useState} from "react";
import axios from "axios";
import {DataContext, STRAPI_URL} from "../utils/utils.js";
import {useNavigate} from "react-router-dom";

const Login = ({setVisible, setView}) => {

    const {handleLogin} = useContext(DataContext);

    const navigate = useNavigate();

    const dataFormat = () => ({email: "", password: ""});

    const [formData, setFormData] = useState(dataFormat());

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password} = formData;
        axios.post(`${STRAPI_URL}/api/auth/local`, {
            identifier: email,
            password
        }).then(res => {
            const {user, jwt} = res.data;
            handleLogin({...user, token: jwt});
            setVisible(false);
            navigate("/");
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmit}>
                <span onClick={() => setVisible(false)}>&times;</span>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email *" name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password *" name="password" onChange={handleChange}/>
                <button type="submit">SUBMIT</button>
                <p>Don't have an account? <a onClick={() => setView(false)}>Sign Up</a></p>
            </form>
        </section>
    )
}
export default Login;
