import {Outlet} from "react-router-dom";
import Header from "../common/Header.jsx";

const Checkout = () => {
    return (
        <div>
            <Header route="Shopping Cart" subRoute="Checkout"/>
            <Outlet/>
        </div>
    )
}
export default Checkout

