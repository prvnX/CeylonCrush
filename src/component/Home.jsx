import React from 'react';
import "../style/homestyle.css";
import './app.css';
function Home({className}){
    const [name,setName]=React.useState("");
    function handleChange(event){
        setName(event.target.value);
    }
    let date=new Date();
    let time=date.getHours();
    let greeting="";
    if(time>=1 && time<12){
        greeting="Good Morning";
    }
    else if(time>=12 && time<18){
        greeting="Good Afternoon";
    }
    else{
        greeting="Good Evening";
    }
    return (
        <div className={`app-container ${className}`}>
                <div class="heading-container">
                <h1 class="welcome">{greeting+" "+name}</h1>
                <div class="introduction"><p>Welcome to Ceylon Crush, where connections blossom into something extraordinary. Dive into a world of meaningful connections and heartfelt encounters. At Ceylon Crush, we're dedicated to bringing people together based on shared interests, values, and aspirations. Discover a platform designed to spark conversations, forge friendships, and ignite romance. Whether you're seeking companionship, friendship, or love, Ceylon Crush is your gateway to meaningful relationships. Join us and explore the possibilities of finding your perfect match in a warm and inviting community. Start your journey with Ceylon Crush today.</p></div>
                <input  type="text" placeholder="Tell us your name" class="textfield" onChange={handleChange} />
                </div>
            <div class="intro">
          <div class="introrow">
            <h3 class="what">What We Do?</h3>

            <img class="img1" src="https://static01.nyt.com/images/2021/03/07/fashion/07Matchmaker1/Matchmaker1-mediumSquareAt3X.jpg" alt="img" />
            <p class="whatansw">Ceylon Crush is a premier dating platform designed to foster genuine connections and meaningful relationships. We provide a safe and inclusive space where individuals can explore potential matches based on shared interests, values, and life goals.</p>
          </div>
          <div class="introrow">
          <h3 class="what">Why Us?</h3>
            <img class="img2" src="https://ideasprod.darden.virginia.edu/sites/default/files/2018-12/feel-lik-a-million-dollars-matchmaking.jpg" alt="webdevimg" />
            
            <p>Our website stands out for its user-friendly interface and sophisticated matchmaking algorithms. We prioritize user privacy and security, ensuring a positive experience for all members. Whether you're looking for companionship, friendship, or romance, Ceylon Crush offers personalized matchmaking that enhances your chances of finding a compatible partner.</p>
          </div>
          <div class="app">
            <h1 class="downloadapp">
                Go Ahead and Download
            </h1>
            <p>Now Available on Play Store and App Store</p>
            <button class="downloadbtn">Download <span class="context">For Android</span></button>
            <button class="downloadbtn">Download <span class="context">For Apple</span></button>
            </div>
        </div>
        </div>
        )
}
export default Home;