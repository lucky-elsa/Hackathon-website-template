import React from "react";
import "./prizes.scss"


function PrizeHeading(){
    return(
    <div className="PrizeHeading">
    <h1>Prize tracks</h1>
    </div>
    );
}

function FirstPrize(props){
return(
   <div className="Prizes">
   {props.icon}
   <h2>{props.type}</h2>
   <p>{props.content}</p>
    </div>
);
}





export {FirstPrize , PrizeHeading}


