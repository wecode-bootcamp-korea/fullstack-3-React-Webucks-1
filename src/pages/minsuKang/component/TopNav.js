import React from "react";
import List from "../List/ListMinsu";
import Detail from "../Detail/DetailMinsu"

function TopNav(){
    return(                    
    <div className="TopNav_wrapper">
        <h1 className="logo">WeBucks</h1>
        <div className="nav">
            <ul className="coffee">COFFEE</ul>
            <ul className="menu">MENU</ul>
            <ul className="store">STORE</ul>
            <ul className="what">WHAT'S NEW</ul>   
        </div>
    </div>  ) 
}
    
    






    export default TopNav;