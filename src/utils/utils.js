import {createContext} from "react";

export const scrollToTop = () => {
    window.scroll({top: 0});
}

export const setPageTitle = (currentPage) => {
    document.title = `Reminisce Visuals - ${currentPage}`;
}

export const scrollTo = (ref) => {
    ref.current?.scrollIntoView();
}

export const STRAPI_URL = `http://localhost:1337`;

export const getUserData = ({id, token, username, email, password, bookings = []}) => {
    return {id, token, username, email, password, bookings};
}

export const DataContext = createContext(null);