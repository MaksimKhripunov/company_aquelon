import React from "react";


import "../css/content.css"
import {FaRegCircle, FaCircle} from 'react-icons/fa'



class Content extends React.Component{
    state={
        ab_flag: false,
        pr_flag: false,
        con_flag: false
    }

    render() {
        return(
            <>

                <div className={"menu"}>
                    {this.state.ab_flag ?
                        <a href={"#aboutUs"}>
                        <FaCircle  className={"ab"} onMouseLeave={()=>
                            this.setState({
                                ab_flag: false,
                                pr_flag: false,
                                con_flag: false
                            })}/>
                            </a>: <>
                            <FaRegCircle className={"ab"} onMouseMove={()=>
                            this.setState({
                                pr_flag: false,
                                con_flag: false,
                                ab_flag: true
                            })
                            }/>
                        </>
                    }

                    <br/>
                    {this.state.pr_flag ?
                        <a href={"#ourProducts"}>
                        <FaCircle className={"pr"} onMouseLeave={()=>
                            this.setState({
                                ab_flag: false,
                                pr_flag: false,
                                con_flag: false
                            })}/>
                        </a> :  <FaRegCircle className={"pr"} onMouseMove={()=>
                            this.setState({
                                ab_flag: false,
                                con_flag: false,
                                pr_flag: true
                            })
                            }/>
                    }
                    <br/>
                    {this.state.con_flag ?
                        <a href="/#ourContacts">
                        <FaCircle className={"con"} onMouseLeave={()=>
                            this.setState({
                                ab_flag: false,
                                pr_flag: false,
                                con_flag: false
                            })}/>
                        </a>:  <FaRegCircle className={"con"} onMouseMove={()=>
                            this.setState({
                                ab_flag: false,
                                pr_flag: false,
                                con_flag: true
                            })
                            }/>
                    }
                </div>
                <div className={"d13"}></div>

            </>
        )
    }
}

export default Content