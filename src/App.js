import React from 'react';
import './App.css';

let newsDetail=[{
  time:"Jan.30,2018",
  title:"Kodak's Dubious Blockchain Gamble",
  abstract:"What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights manangement or trying to mkae a quick buck.",
  author:"Kevin Roose",
  image:"https://bit.ly/2ATIfv5",
  alt:"picture of blockchain",
},
{
  time:"Jan.30,2018",
  title:"Taiwan Retaliates Against Chinese Airlines, Hampering Luner New Year Travel",
  abstract:"Taiwan, pushing ack over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
  author:"Chris Horton",
  image:"https://bit.ly/2IAzfzd",
  alt:"picture of china eastern airline airplane"
},
{
  time:"Jan.29,2018",
  title:"New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
  abstract:"Democratic governors nationwide are taking steps to tax or proce emissions within their own borders, even as Trump dismantles federal climate policy.",
  author:"Brad Plumer",
  image:"https://bit.ly/2MnFx6s",
  alt:"picture of Phil Murphy"
}];
function App() {
  return (
    <div>
      <News time={newsDetail[0].time} author={newsDetail[0].author} title={newsDetail[0].title} abstract={newsDetail[0].abstract} image={newsDetail[0].image} alt={newsDetail[0].alt}/>
      <News time={newsDetail[1].time} author={newsDetail[1].author} title={newsDetail[1].title} abstract={newsDetail[1].abstract} image={newsDetail[1].image} alt={newsDetail[1].alt}/>
      <News time={newsDetail[2].time} author={newsDetail[2].author} title={newsDetail[2].title} abstract={newsDetail[2].abstract} image={newsDetail[2].image}alt={newsDetail[2].alt}/>
    </div>
  );
}

function News(props){
  return(
    <div className="news">
    <div id="postTime">
    <h5>{props.time}</h5>
    </div>
    <div id="postContent">
    <h2>{props.title}</h2>
    <p>{props.abstract}</p>
    <p id="sub">By {props.author}</p>
    </div>
    <div id="postImage">
    <img src={props.image} alt={props.alt}/></div>
  </div>
  )
}

export default App;
