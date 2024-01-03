import styles from "./successfull-booking.module.css";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import Section from "../../components/section.jsx";
import {useNavigate} from "react-router-dom";

const SuccessfullBooking = () => {

    const navigate = useNavigate();

    const contents = (
        <>
             <div className={styles.box}>
                 <h2>THANK YOU FOR CHOOSING</h2>
                 <div>
                     <h1>REMINISCE</h1>
                     <img src={require("../../images/logo.png")} alt="logop.ng"/>
                     <h1>VISUALS</h1>
                 </div>
                 <button onClick={() => navigate("/")}>HOME</button>
             </div>
        </>
    )

    return (
        <>
            <Navbar currentPage="" />
            <Section contents={contents}/>
            <Footer currentPage=""/>
        </>
    )
}

export default SuccessfullBooking;