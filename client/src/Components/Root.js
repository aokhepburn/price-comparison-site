import { Outlet } from "react-router-dom";
import Header from "./Static/Header";
// import Footer from "./Static/Footer";
import App from "../App"

export default function Root() {
    return (
        <div>
            <Header/>
            <App/>{
            /* <Footer/> */}

        </div>
    )
}