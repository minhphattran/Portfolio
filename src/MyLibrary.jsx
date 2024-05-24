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
import checker1 from './picture/checker1.png'
import checker2 from './picture/checker2.png'
import checker3 from './picture/checker3.png'
import checker4 from './picture/checker4.png'
import tracker1 from './picture/workout_tracker.png'
import tracker2 from './picture/workout_tracker2.png'
import tracker3 from './picture/workout_tracker3.png'
import radio1 from './picture/radio1.png'
import radio2 from './picture/radio2.png'
import radio3 from './picture/radio3.png'
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';








function PersonalInformation(){
    const handleClick = (message) => {
        location.href=message;
    };
    const handleLink = (link) => {
        window.open(link);
    }

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_qkw7wf3', 'template_j4qbydg', e.target, 'ISCJmM5V8Xe3tW26Z')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width:'100%', textAlign:'center' }}>
            <h1 style={{margin:'20px', fontSize:'3rem'}}>Welcome to My Portfolio</h1>
            <div className='Headline'> 
                <h1 onClick={() => handleClick('#education')}>Education</h1>
                <h1 onClick={() => handleClick('#project')}>Projects</h1>
                
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


            <section id='project'>
                <h1 style={{paddingTop:'2rem',fontSize:'3rem'}}> Projects </h1>
                
                <div className='project_content'>
                    <h1 style={{paddingBottom:'2rem', fontWeight:'normal', fontSize:'2rem',width:'100%'}}>Online Conect 3</h1>
                    <div className='each_project'>
                        <div className='checker_pic'>
                            <img className='checker1' src={checker1} alt="Project Picture" />
                            <img className='checker2' src={checker2} alt="Project Picture" />
                            <img className='checker3' src={checker3} alt="Project Picture" />
                            <img className='checker4' src={checker4} alt="Project Picture" />
                        </div>
                        <div className='checker_info' >
                            <p style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'left'}}>Overview:</p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> This is a checker-like game. The rule is simple. Whoever has 3 connected tokens first is the winner!  </p>
                            <p style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'left'}}>Description:</p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Frontend - XML is used to create intuative user interface </p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Backend - Java is used to handle the logic of the game such as deciding whose turn, who is the winner, or the game is drawn. In addition, realtime databe Firebase is used in the role of connecting players from different devices through WIFI  </p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Database - Realtime databe ,Firebase, is used in the role that connecting players from different devices through WIFI. Players obtain the moves of the oppents from the database</p>

                        </div>
                    </div>
                    
                    <h1 style={{paddingBottom:'2rem', fontWeight:'normal', fontSize:'2rem',width:'100%'}}>Workout Tracker</h1>

                    <div className='each_project'>
                        <div className='checker_pic'>
                            <img className='tracker1' src={tracker1} alt="Project Picture" />
                            <img className='tracker2' src={tracker2} alt="Project Picture" />
                            <img className='tracker3' src={tracker3} alt="Project Picture" />
                            
                        </div>
                        <div className='checker_info'>
                            <p style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'left'}}>Overview:</p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> This app allows users to see what workouts they plan and helps them keep track when doing them.   </p>
                            <p style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'left'}}>Description:</p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Frontend: XML is used to create intuative user interface </p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Backend - Java is used to implement the function of each button of the app. User can use the add button to add exercise, short press on each exercise to edit, long press to delete exercise, start button to start a workout session. </p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Database - SQLite is implemented to retain the data of user preventing data loss when closing the app.</p>
                        </div>
                    </div>


                    <h1 style={{paddingBottom:'2rem', fontWeight:'normal', fontSize:'2rem',width:'100%'}}>Radio Web</h1>
                    <div className='each_project'>
                        <div className='radio_pic'>
                            <img className='radio1' src={radio1} alt="Project Picture" />
                            <img className='radio2' src={radio2} alt="Project Picture" />
                            <img className='radio3' src={radio3} alt="Project Picture" />
                            
                        </div>
                        <div className='checker_info'>
                            <p style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'left'}}>Overview:</p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> This website provide audio services. User can see lists of song and clicks on songs they want to listen to. User can also give feedback to the server by liking or disliking the songs. Search function is also implemented. User profile can be edited by themselves.   </p>
                            <p style={{fontSize:'1.5rem', fontWeight:'bold',textAlign:'left'}}>Description:</p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Frontend: HTML and CSS is used to construct the interface with style so users can intuitively use the website. </p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Backend - Vanilla JavaScript and EJS are used to handle the logic of each button's function, search function, and update the database.  </p>
                            <p style={{fontSize:'1.3rem', fontWeight:'normal',textAlign:'left', lineHeight:'1'}}> Database - MongoDB is used to stored user information, songs' information, and playlists' information.</p>
                        </div>
                    </div>

                    

                    
                   
                    
                     
                </div>
            </section>
            <section id='contact'>
            


                <h1 style={{display:'flex',alignItems:'center',justifyContent:'center', gap:'3rem',paddingBottom:'6rem'}}><EmailIcon style={{fontSize:'4rem'}}/>    Feel Free to Send Me an Email    <EmailIcon style={{fontSize:'4rem'}}/></h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    
                    
                        <label>Your Message </label>
                        <textarea style={{ width:'90vw', minHeight:'20rem', maxWidth:'40rem'}} name="html_message" />
                    
                
                    <input style={{width:'10rem', height:'3rem'}} type="submit" value="Send" />
                </form>
               
            
            
            </section>




            
        </div>
        


    );
}

export default PersonalInformation;