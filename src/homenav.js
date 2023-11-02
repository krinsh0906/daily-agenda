import React from 'react';
import {FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Homenav() {
  return (
    <div>
       <nav className='main-nav'>
                {/* nav section */}
                <div className='homenav-logo'>
                    <h2>
                        DAILY AGENDA.
                    </h2>
                    {/* nav end */}
                </div>

                <div className='homenav-link'>
                    <ul>
                        <li ><a className='space' href='#'>Home</a></li>
                        <li ><a className='space' href='#'>TodoList</a></li>
                        <li ><a className='space' href='#'>Contact us</a></li>
                        <li><Link to={"/login"}><FaUserAlt/></Link></li>

                    </ul>
                </div>

            </nav>
    </div>
  );
}

export default Homenav;
