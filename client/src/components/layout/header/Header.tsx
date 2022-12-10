import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from './styled';
import { BsSearch, BsPersonCircle, BsStack }
from 'react-icons/bs';
import logo from '../../../assets/logotypo.png';

// Import Components
import Sidebar from './components/sidebar/Sidebar';



const Header: React.FC = () => {
    var logotype = logo;

    return(
        <Grid>
            <div className='header'>
                <div className='brand'>
                    <div className='eclipse'>
                        <div className='circle'>
                            <img src={logotype} alt='logotype' />
                        </div>
                    </div>
                    <span className='name'>Grim Manga</span>
                </div>

                <div className='navbar'>
                    <div className='circle'>
                        <div className='icon'>
                            <Link to='' className='link'><BsSearch /></Link>
                        </div>
                    </div>

                    <div className='circle'>
                        <div className='icon'>
                            <Link to='' className='link'><BsPersonCircle /></Link>
                        </div>
                    </div>

                    <div className='circle'>
                        <div className='icon'>
                            <Link to='' className='link'><BsStack /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='search'></div>
            <div className='sidebar'><Sidebar /></div>
        </Grid>
    );
}

export default Header;
