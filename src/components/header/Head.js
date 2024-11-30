
import React,{Component} from "react";
import Menu from "../menu/Menu";
import Image from "../../images/Logo.png"
const Head=()=>{
    return(
        <header>
            <img src={Image}/>
            <Menu/>
            <input type="button" value={"Sign in"} className="MenuButton"/>
            <input type="button" value={"Log in"} className="MenuButton2"/>
        </header>
        
    )
}
export default Head
