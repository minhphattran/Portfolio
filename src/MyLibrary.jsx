import './MyCss.css'
import React from 'react';
import profilePicture from './picture/mrFresh.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';


function PersonalInformation(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width:'100%', textAlign:'center' }}>
            <h1 style={{margin:'20px'}}>Welcome to My Portfolio</h1>
            <div className='Headline'> 
                <h1>Education</h1>
                <h1>Project</h1>
                <h1>Experience</h1>
                <h1>Contact</h1>
            </div>
            <div className='content'>
                <img className='profile' src={profilePicture} alt="Description of your image" />
                <div className='info'>
                    <p>Hello, my name is</p>
                    <p>Minh Phat Tran</p>
                    <p>Software Developer</p>
                    <div style={{display:'flex', justifyContent:'space-around',paddingTop:'30px', paddingBottom:'60px'}} >
                        <GitHubIcon style={{fontSize: '60px'}}/>
                        <LinkedInIcon style={{fontSize: '60px'}}/>
                        <InstagramIcon style={{fontSize: '60px'}}/>
                    </div>
                    <Button variant="outlined">Download Resume</Button>
                    
                </div>
            </div>
        </div>


    );
}

export default PersonalInformation;