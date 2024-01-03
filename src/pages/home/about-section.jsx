import styles from "./about-section.module.css";
import {useState} from "react";
import left from "../../images/left.png";
import middle from "../../images/middle.png";
import right from "../../images/right.png";
import PopUp from "../../components/pop-up.jsx";

const AboutSection = () => {

    const [profile, setProfile] = useState(null);

    const profiles = [
        {
            name: "yipeul jhae",
            background: require("../../images/left.png"),
            contents:
                <>
                    <h1>Founder/photographer</h1>
                    <h1>yipeul jhae</h1>
                    <p>Yipeul Jhae is a versatile artist with a passion for capturing life's most beautiful moments. As a freelance photographer and filmmaker, he has a unique talent for turning fleeting experiences into lasting memories. Yipeul is not just an artist but also the visionary founder of Reminisce Visuals, a creative platform dedicated to preserving the magic of weddings, modeling photoshoots, and birthday celebrations. With an unwavering commitment to quality and creativity, he ensures that every image and film he creates is a work of art. Join Yipeul in his journey to make your special moments last forever through the lens of Reminisce Visuals.</p>
                </>
        },
        {
            name: "joshua balladares",
            background: require("../../images/middle.png"),
            contents:
                <>
                    <h1>Editor</h1>
                    <h1>joshua balladares</h1>
                    <p>Meet Joshua Balladares, the skillful editor behind Reminisce Visuals. With a keen eye for detail, Joshua excels at enhancing photos, bringing out their full beauty. His talent has earned him recognition as an award-winning editor among Mindanao artists. Through his expertise, he adds a touch of magic to every image we create at Reminisce Visuals.</p>
                </>
        },
        {
            name: "baek yi-jin",
            background: require("../../images/right.png"),
            contents:
                <>
                    <h1>manager</h1>
                    <h1>baek yi-jin</h1>
                    <p>Introducing Baek Yi-Jin, the versatile manager of Reminisce Visuals. With a wide range of skills, Baek is not only an adept manager but also a talented photographer, filmmaker, and editor. He plays a crucial role in ensuring that every project is executed seamlessly. Baek's dedication to perfection and creative prowess make him an invaluable asset to the Reminisce Visuals team, helping us bring your cherished moments to life in the most captivating way.</p>
                </>
        }
    ];

    const handleClose = (e) => {
        if(e.target.tagName === 'SECTION'){
            setProfile(null);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h1>OUR INCREDIBLE</h1>
                <h1>TEAMMATES</h1>
                <span>The team behind the capture of every beautiful moment.</span>
            </div>
            <div className={styles.bottom}>
                {profiles.map((profile, index) => {
                    return <div key={index} style={{backgroundImage: `url(${profile.background})`}} onClick={() => setProfile(profile)}></div>
                })}
            </div>
            {profile && <PopUp backgroundImage={profile?.background} elements={profile?.contents} handleClose={handleClose}/>}
        </section>
    )
}

export default AboutSection;