import React,{useEffect} from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots,removeBot,selectedBot}) {
  //your bot army code here...
 
const listArmy=bots.map(bot => {
  return (
  <BotCard 
   key={bot.id} 
   bot={bot}
   handleDelete={removeBot}
   enListBots={selectedBot}
   />
   )
  })


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
