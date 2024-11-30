import React,{Component} from "react";
const nom="M'Rabet imane"
const copyright="Copyright©DEVOFS202"
const année=" Année 2024-2025"
const foot=()=>{
    return(
        <footer className="footer">
            <h3>{nom}</h3>
            <h4>{copyright}</h4>
            <h4>{année}</h4>
        </footer>
    )

}
export default foot