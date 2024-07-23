import React,{useState} from 'react'
import "../style/clockstyle.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
let currenttime=new Date().toLocaleTimeString();
function Clock(){
   const [time,setTime]=useState(currenttime);
    function updateTime(){
         setTime(new Date().toLocaleTimeString());
    }
    setInterval(updateTime,1000);
    return (<div>  <h6 class="clock" >{time}</h6></div>)
}
export default Clock;