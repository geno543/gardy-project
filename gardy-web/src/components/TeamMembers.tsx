import React, { useState } from 'react';
import './TeamMembers.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
}

const TeamMembers: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Abdullah Gamil",
      role: "Research Analyst",
      image: "/team/abdallah.jpg",
      bio: "Abdullah conducts laboratory testing and data analysis for the Gardy system, validating performance metrics and identifying optimization opportunities across all treatment stages.",
      linkedin: "https://www.linkedin.com/in/ammar-hussieny/",
      email: "Abdullah.1023094@stemoctober.moe.edu.eg"
    },
    {
      name: "Ammar Abdelmoneam",
      role: "Development Engineer",
      image: "/team/ammar2.jpg",
      bio: "Ammar designs the physical components of the Gardy system, focusing on making the technology accessible, affordable, and maintainable in resource-limited environments.",
      linkedin: "https://www.linkedin.com/in/amaar-mohamed-a2b27a2b4/",
      email: "ammarrkamell@gmail.com"
    },
    {
      name: "Ammar Hussieny",
      role: "Project Lead",
      image: "/team/ammar.jpg", 
      bio: "Ammar leads the Gardy system development, focusing on overall system integration and performance optimization. His research focuses on sustainable water treatment technologies for arid regions.",
      linkedin: "https://www.linkedin.com/in/abdullah-gamil/",
      email: "ammarmohamed2565@gmail.com"
    },
    {
      name: "Mohamed Ramadan",
      role: "Technology Specialist",
      image: "team/geno.jpeg",
      bio: "Geno specializes in advanced filtration technologies and membrane systems. He developed the modified reverse osmosis component that reduces energy requirements by 30%.",
      linkedin: "https://www.linkedin.com/in/mohamed-ramadan-551a17272/",
      email: "mohamedr7825@gmail.com"
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">OUR RESEARCH TEAM</h2>
          <div className="title-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-symbol"></span>
            <span className="decoration-line"></span>
          </div>
          <p className="team-description">
            Meet the innovators behind the Gardy Water Treatment System
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              className={`team-card ${activeCard === index ? 'active' : ''}`}
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="profile-image-container">
                    <div className="profile-image-frame">
                      <div 
                        className="profile-image" 
                        style={{
                          backgroundImage: `url(${process.env.PUBLIC_URL + member.image})`
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
                
                <div className="card-back">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-contact">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={`mailto:${member.email}`} className="social-link email">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card-decoration top-left"></div>
              <div className="card-decoration top-right"></div>
              <div className="card-decoration bottom-left"></div>
              <div className="card-decoration bottom-right"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers; 