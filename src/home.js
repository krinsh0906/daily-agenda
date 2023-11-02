import React from 'react';
import {FaUserAlt} from 'react-icons/fa'
import todo1 from './assest/todo2.jpg'
import todo from './assest/todo.jpg'
import { TypeAnimation } from 'react-type-animation';



function Home() {
  return (
    <div>
  {/* navigation section */}
       <nav className='main-nav'>
                {/* nav section */}
                <div className='logo'>
                    <h2>
                        DAILY AGENDA.
                    </h2>
                    {/* nav end */}
                </div>

                <div className='main-link'>
                    <ul>
                        <li ><a className='space' href='#'>Home</a></li>
                        <li ><a className='space' href='#'>TodoList</a></li>
                        <li ><a className='space' href='#'>Contact us</a></li>
                        <li><a href='#'><FaUserAlt/></a></li>

                    </ul>
                </div>

            </nav>
            {/* navigation section ends */}

            {/* hero section */}

            <div>
        <img className='hero-vactor' src={todo} />
      </div>
      <div className='hero-text'>
        <h2 data-aos="fade-up" data-aos-duration="1500">
          Stay Organized,<br />
          Your Life.
        </h2>
        <TypeAnimation className='hero-animation'
          data-aos="fade-up"
          sequence={[
            " Make Your Task  ",
            2000,
            "",
          ]}
          speed={30}
          wrapper='h2'
          repeat={Infinity}


        />
        <div className='hero-button'>
          <button className='main-button' type='submit'>Contact us</button>
        </div>

      </div>
      {/* hero section end */}


      {/* todo section */}



      <hr className='todo-line'></hr>
            <div className='maintodo-container'>

                <div className='todo-logo'>
                    <h2>Todo List</h2>

                </div>
                <div className='todo-text'>
                    <p>Todolist is a simple and effective tool used for task management and organization.<br /> To-do lists are commonly used in both personal and professional settings to help<br /> people stay organized, manage their time efficiently, and ensure important tasks<br /> are not forgotten.</p>
                    <div className='todo-button'>
                        <button className='button' type='submit'>Get Start</button>
                    </div>
                </div>

                <div className='todo-img' >
                    <img className='todo-vactor' src={todo1}></img>
                </div>
            </div>

            {/* todo section end */}


            {/* contactus section */}

            <hr className="contactus-line"/>
    <div className="contactus-containor">
    <div className="contactus-heading">
      <h1>Contact</h1>
      <div className="contactus-form">
        < form >
          <div>

            <input type="text" placeholder="Enter Your First Name"  className="contact-input1"></input> 
      
            <input type="text" placeholder="Enter Your Last Name"  className="contact-input1 contact-space"></input>
          
          </div>
          <div>

          </div>
          

          <div className="space">
            <input type="email" placeholder="Enter Your Email" className="contact-input"></input><br/>
          </div>

          <div className="space">
            <textarea rows={6} placeholder="Enter Your Message" className="contact-input2"></textarea>
          </div>
          <div>
            <button type="Submit"  className="contact-input-submit ">Submit</button>
          </div>
          
        </form>
      </div>

        
        
        </div>
      </div>
    {/* contact section end */}

    {/* footer section */}

    <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>
                        DAILY AGENDA.
                    </h2>
                </div>
                <div className="footer-info">
                    <h3>Contact Information</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Todolist</a></li>
                        <li><a href="/services">Contactus</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">

                <p>&copy; {new Date().getFullYear()} DAILY AGENDA. All rights reserved.</p>
            </div>
        </footer>
{/* footer end */}
    </div>
  );
}

export default Home;
