import React from "react";
import Image from "./Image";
import logo from "../images/aqf.png"


import "../css/headers.css"





class Headers extends React.Component{
    render() {
        return(
            <>
                <header>
                    <div className={"top"}>
                        <p id={"tel"}><a href={'tel:+79515575059'}>Телефон: +7-951-557-50-59</a></p>
                        <Image image={logo} className={"logo"}></Image>
                        <p id={"email"}><a href={'mailto:s.hripunow@yandex.ru'}>Почта: s.hripunow@yandex.ru</a></p>
                    </div>
                </header>

            </>
        )
    }
}

export default Headers