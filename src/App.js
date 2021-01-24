import React from 'react';
import './App.css';
import Video from "./Video";
function App() {
  return (
    <div className="app">
     
    <div className="app__videos">
    
      <Video
      url = "ins.mp4"
      channel ="jey prakash"
      description ="wanderlust forever"
      song = "moongil kaadugalae-samurai"
      likes ={771}
      messages = {232}
      shares ={72} />

      < Video 
      url = "ash1.mp4"
      channel ="Johnny Depp"
      description ="Pirates Of Carribean"
      song = " Trailer -Dialogue"
      likes ={555}
      messages = {121}
      shares ={968}/>
      <Video />
      <Video />
    </div>
    </div>
  );
}

export default App;
//https://youtu.be/668nUCeBHyY