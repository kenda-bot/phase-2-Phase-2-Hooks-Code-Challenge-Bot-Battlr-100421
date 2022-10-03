import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])
  
   useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=>response.json())
    .then((data)=>{setBots(data) 
      console.log(data)})
   },[]
   );


   
  function enListBots(bot) { 
    // setBots(bots.map(b=>b.id===bot.id?{...b,army:true} :b));
    bot["army"]=true
    console.log(bot)
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
      bots={bots}
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
