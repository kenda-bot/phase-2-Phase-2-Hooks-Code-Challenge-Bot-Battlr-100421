import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,handleDelete,enListBots}) {
  // Your code here
  const displayBotCards = bots.map((bot)=>{
    return(
       <BotCard 
     key={bot.id}
      bot={bot}
      handleDelete={handleDelete}
      enListBots={enListBots}
      />
    )    
  })
     

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {displayBotCards}
        Collection of all bots

      </div>
    </div>
  )
  }
export default BotCollection;
