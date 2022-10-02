import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,addToMyBotArmy,deleteBot}) {
  // Your code here
  const displayBotCards = bots.map((bot)=>{
    return <BotCard addToMyBotArmy={addToMyBotArmy} deleteBot={deleteBot} key={bot.id} bot={bot}></BotCard>;
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
