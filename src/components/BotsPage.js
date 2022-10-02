import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])
  const[selectedBots,setSelectedBots]=useState([])
   useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=>response.json())
    .then((data)=>setSelectedBots(data))
   },[])

   function deletebot(bot) {
    const filterbots=bots.filter(
      (singlebot)=>singlebot.id !==bot.id
    );
    const deleteConfig={
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(`https://localhost:8002/bots/${bot.id},deleteConfig`)
        .then(()=>setBots(filterbots))
  }
  function addToMyBotArmy(bot) { 
    setSelectedBots((prevbot) =>{
      return[...prevbot]
    })
  }
  return (
    <div>
      <YourBotArmy bots={selectedBots} />
      <BotCollection  addToMyBotArmy={addToMyBotArmy} deleteBot={deletebot} bots={bots}/>
    </div>
  )
}

export default BotsPage;
