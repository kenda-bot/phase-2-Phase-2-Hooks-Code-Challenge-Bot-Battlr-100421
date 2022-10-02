import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])
  
   useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=>response.json())
    .then((data)=>setBots(data));
   },[]);

   function removeBot(bot) {
    setBots(bots.map(b=>b.id===bot.id?{...b,army:false} :b));
   }
   
  function enListBots(bot) { 
    setBots(bots.map(b=>b.id===bot.id?{...b,army:false} :b));
    }

    function handleDelete(bot){
      setBots(bots.filter(b => b.id !== bot.id))
  }
  return (
    <div>
      <YourBotArmy 
      bots={bots.filter(b=>b.army)} 
      removeBot={removeBot}
      selectedBot={enListBots}
      />
      <BotCollection 
      bots={bots}
      handleDelete={handleDelete}
     enlistBots={enListBots}
     />
    </div>
  )
}

export default BotsPage;
