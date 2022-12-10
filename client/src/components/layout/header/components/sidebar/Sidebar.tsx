import React from 'react';
import { Link } from 'react-router-dom';
import {
    BsHouseFill,
    BsServer,
    BsBullseye,
    BsToggles,
    BsCreditCard2Back,
    BsBoxArrowRight
}
from 'react-icons/bs'
import { Grid } from './Styled';
import gravatar from '../../../../../assets/tumblr.jpg';


const Sidebar = () => {
    const avatar = gravatar;

    return(
        <Grid>
            <ul className='sidebar'>
                <li>
                    <div className='box'>
                        <Link to='' className='link'>
                            <span className='name'>Pagina Inicial</span>
                            <i><BsHouseFill /></i>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='box'>
                        <Link to='' className='link'>
                            <span className='name'>Biblioteca</span>
                            <i><BsServer /></i>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='box'>
                        <Link to='' className='link'>
                            <span className='name'>Supreenda Me</span>
                            <i><BsBullseye /></i>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='box'>
                        <Link to='' className='link'>
                            <span className='name'>Preferencias</span>
                            <i><BsToggles /></i>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='box'>
                        <Link to='' className='link'>
                            <span className='name'>Doação</span>
                            <i><BsCreditCard2Back /></i>
                        </Link>
                    </div>
                </li>
            </ul>

            <ul className='user'>
                <li>
                    <div className='box'>
                        <Link to='' className='link'>
                            <span className='name'>Sair</span>
                            <i><BsBoxArrowRight /></i>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='box'>
                        <div className='tumblr'>
                            <span className='avatar'>
                                <img src={avatar} alt='Avatar' />
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Grid>
    );
}

export default Sidebar;
