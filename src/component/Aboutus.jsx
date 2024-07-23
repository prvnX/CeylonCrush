import React from 'react';
import '../style/aboutusstyle.css';

function Aboutus({ className }) {
  return (
    <div className={`aboutus ${className}`}>
      <div className="aboutuscontainer">
        <h1 className="aboutusheading">About Us</h1>
        <p>Welcome to Ceylon Crush, where connections blossom into something extraordinary. Our mission is to create a safe and inclusive platform for individuals to explore meaningful relationships.</p>
      </div>
      <div className="aboutuscontent">
        <h2>Our Story</h2>
        <img src="images/story.avif" alt="Our Story" className="aboutusimg" />
        <p>Ceylon Crush was founded in 2024 with the vision of redefining the online dating experience. Over the years, we have grown into a community where genuine connections are made.</p>
        <h2>Mission and Vision</h2>
        <img src="images/vision2.jpg" alt="mission" className="aboutusimg" />
        <p>Our mission is to provide a platform where individuals can find meaningful connections based on shared values and interests. Our vision is to be the leading dating site known for fostering genuine relationships.</p>
        <h2>Our Values</h2>
        <img src="images/mission.jpeg" alt="mission" className="aboutusimg" />
        <p>Integrity, respect, and inclusivity are at the core of everything we do. We believe in creating a respectful and supportive environment for all our members.</p>
        <h2>Meet the Team</h2>
        <table>
          <tr>
            <td>
              <div className="team-member">
                <img src="images/prof2.jfif" alt="Team Member 1" className="teamimg" />
                <div>
                  <h3 className="teamname">John Doe</h3>
                  <p className="position">Founder & CEO</p>
                </div>
              </div>
            </td>
            <td>
              <div className="team-member">
                <img src="images/profimg2.jfif" alt="Team Member 2" className="teamimg" />
                <div>
                  <h3 className="teamname">K D P Madushan</h3>
                  <p className="position">Chief Marketing Officer</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Aboutus;
