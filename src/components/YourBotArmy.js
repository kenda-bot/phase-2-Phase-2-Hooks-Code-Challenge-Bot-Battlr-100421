import React,{useEffect} from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots}) {
  //your bot army code here...
 
const listArmy=bots.map(bot =>bot.army && (<BotCard  key={bot.id} bot={bot}/>))

useEffect(()=>{
  fetch("http://localhost:8002/bots")
  .then((response)=>response.json())
  .then((data)=>
    console.log(data))
 },[]
 );
 
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
             {listArmy}
        
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
