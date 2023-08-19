import React from "react";

import "../css/footer.css"





class Footer extends React.Component{
    render() {
        return(
            <>
                <footer>
                    <div className={"bottom"}>
                        <p id={"telephone"}>Телефон: 8-951-557-50-59</p>
                        <p id={"em"}>Почта: s.hripunow@yandex.ru</p>
                    </div>
                </footer>

            </>
        )
    }
}

export default Footer