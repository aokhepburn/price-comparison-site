import {Outlet} from "react-router-dom";
import Header from "./Static/Header";
// import Footer from "./Static/Footer";

export default function Root () {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}