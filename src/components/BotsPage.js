import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])
  
   useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=>response.json())
    .then((data)=>setBots(data))
   },[]);


   
  function enListBots(bot) { 
   const selectBots= bots.map(b=>b.id===bot.id?{...b,yourArmy:true} :b);
    setBots(selectBots);
    }

    function removeBot(bot){
      const removeFromList= bots.map(singleBot => singleBot.id === bot.id ? {...singleBot, yourArmy:false} : singleBot);
        setBots(removeFromList);
     }

    function handleDelete (bot){
  
      const filterbots = bots.filter((singlebot) => singlebot.id !==  bot.id);
      const   deleteConfig =  {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            } 
      }
      fetch(`http://localhost:8002/bots/${bot.id}`,deleteConfig)
        .then(()=>setBots(filterbots))
    }
  return (
    <div>
      <YourBotArmy 
      bots={bots.filter(oneBot => oneBot.yourArmy)} 
      removeBot={removeBot} 
      selectedBot={enListBots}
    />
      <BotCollection 
      bots={bots}
      handleDelete={handleDelete}
     enListBots={enListBots}
     />
    </div>
  )
}

export default BotsPage;
