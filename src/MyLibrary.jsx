import './MyCss.css'
import React from 'react';
import profilePicture from './picture/mrFresh.jpg'
import campus from './picture/campus.jpg'
import gmu_logo from './picture/gmu_logo.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import resume from './myFile/resume.pdf';


function PersonalInformation(){
    const handleClick = (message) => {
        location.href=message;
    };
    const handleLink = (link) => {
        window.open(link);
    }

    
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width:'100%', textAlign:'center' }}>
            <h1 style={{margin:'20px', fontSize:'3rem'}}>Welcome to My Portfolio</h1>
            <div className='Headline'> 
                <h1 onClick={() => handleClick('#education')}>Education</h1>
                <h1 onClick={() => handleClick('#project')}>Project</h1>
                <h1 onClick={() => handleClick('#experience')}>Experience</h1>
                <h1 onClick={() => handleClick('#contact')}>Contact</h1>
            </div>
            <div className='content'>
                <img className='profile' src={profilePicture} alt="Profile Picture" />
                <div className='info'>
                    <p>Hello, my name is</p>
                    <p>Minh Phat Tran</p>
                    <p>Software Developer</p>
                    
                        <ul style={{paddingInlineStart:"0",display:'flex', justifyContent:'space-around',paddingTop:'30px', paddingBottom:'60px',flex:"row", listStyle:"none",}}>
                            <li className='git_icon' onClick={() => handleLink('https://github.com/minhphattran')}><GitHubIcon style={{fontSize: '3rem'}}/></li>
                            <li className='linkedin_icon' onClick={() => handleLink('https://www.linkedin.com/in/minh-phat-tran-99b776260/')}><LinkedInIcon style={{fontSize: '3rem'}}/></li>
                            <li className='instagram_icon' onClick={() => handleLink('https://www.instagram.com/clave___/')}><InstagramIcon style={{fontSize: '3rem'}}/></li>
                        </ul>
                        
                    <a href={resume} download='resume.pdf'><Button variant="outlined" >Download My Resume</Button></a>
                    
                    
                </div>
            </div>
        </div>
        <section id='education'>
            
            <h1 style={{paddingTop:'2rem',fontSize:'3rem'}}><SchoolIcon style={{fontSize:'3rem'}}></SchoolIcon> Graduated May, 2024  <SchoolIcon style={{fontSize:'3rem'}}></SchoolIcon></h1>
            <h1 style={{paddingBottom:'2rem', fontWeight:'normal', fontSize:'2.7rem'}}>GPA: 3.75</h1>
            <div className='education_content'>
                <div className='education_pic'>
                    <img className='campus' src={campus} alt="Campus Picture" />
                    <img className='gmu_logo' src={gmu_logo} alt="GMU LOGO" />
                </div>
                <div>
                    <p style={{fontSize:'2rem', paddingBottom:'2rem', fontWeight:'bold'}}>Related Courses</p>
                    <ul className='courses'>
                        <li>  Data Structure & Algorithms</li>
                        <li> Software Engineer</li>
                        <li> Database Concepts</li>
                        <li> Web App Development</li>
                        <li> Mobile App Development</li>
                        <li> Object-Oriented Programming </li>
                        <li> Low-Level Programming </li>
                        <li> Operating Systems </li>
                        <li> Software Testing & Maintenance</li>
                    </ul>
                </div>
            </div>
            
            
            
        </section>
        </div>
        


    );
}

export default PersonalInformation;