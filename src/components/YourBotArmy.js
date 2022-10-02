import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots,selectedBot,removeBot}) {
  //your bot army code here...
  const listBots=bots.map(bot =>{
    return(
      <BotCard
      key ={bot.id}
      bot={bot}
      handleDelete={removeBot}
      listBots={selectedBot}
      />
    )
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
             {listBots}
        
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
