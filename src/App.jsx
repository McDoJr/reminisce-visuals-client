import HomePage from "./pages/home/home-page.jsx";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/about/about-page.jsx";
import ServicesPage from "./pages/services/services-page.jsx";
import GalleryPage from "./pages/gallery/gallery-page.jsx";
import BookPage from "./pages/book/book-page.jsx";
import PricingPage from "./pages/pricing/pricing-page.jsx";
import SuccessfullBooking from "./pages/process/successfull-booking.jsx";
import Gcash from "./pages/process/gcash.jsx";
import GcashNumber from "./pages/process/gcash-number.jsx";
import GcashCode from "./pages/process/gcash-code.jsx";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import {DataContext, getUserData, STRAPI_URL} from "./utils/utils.js";

const App = () => {

    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = cookies.get("ra_token");
        if(token) {
            const {id} = jwtDecode(token);
            axios.get(`${STRAPI_URL}/api/users/${id}?populate=*`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                setUser(getUserData({...res.data, token}));
            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    const handleLogin = (userData) => {
        const {token, id} = userData;
        const decoded = jwtDecode(token);
        axios.get(`${STRAPI_URL}/api/users/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(getUserData({...res.data, token}));
        }).catch(error => {
            setUser(getUserData(userData));
            console.log(error);
        })
        cookies.set("ra_token", token, {
            expires: new Date(decoded.exp * 1000)
        })
    }

    const handleLogout = () => {
        cookies.remove("ra_token");
        setUser(null);
    }

    return (
        <DataContext.Provider value={{user, handleLogin, handleLogout}}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />}/>
                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/services" element={<ServicesPage />}/>
                    <Route path="/gallery" element={<GalleryPage />}/>
                    <Route path="/book" element={<BookPage />}/>
                    <Route path="/pricing" element={<PricingPage />}/>
                    <Route path="/successfull-booking" element={<SuccessfullBooking />}/>
                    <Route path="/gcash" element={<Gcash />}/>
                    <Route path="/gcash-number" element={<GcashNumber />}/>
                    <Route path="/gcash-code" element={<GcashCode />}/>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}

export default App;