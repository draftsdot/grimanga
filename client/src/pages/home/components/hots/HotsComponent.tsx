import React, { useEffect, useState, useRef } from 'react';
import { Grid } from './styled';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';





const HotsComponents = () => {
    const img = 'image.png';
    const [hot, setHot] = useState([]);
    const cards = useRef(null);

    useEffect(() => {
        fetch('src/utils/json/hots.json')
            .then((response) => response.json())
            .then(setHot);
    }, []);

    const prevEl = (e: any) => {
        e.preventDefault();
        cards.current.scrollLeft -= cards.current.offsetWidth;
    }
    const nextEl = (e: any) => {
        e.preventDefault();
        cards.current.scrollLeft += cards.current.offsetWidth;
    }

    if(!hot || !hot.length) return null;

    return(
        <Grid>
            <div className='container'>
                <div className='cards' ref={cards}>
                    <div className='navigate'>
                        <span className='prev' onClick={prevEl}>
                            <BsCaretLeftFill className='icon'/>
                        </span>
                        <span className='next' onClick={nextEl}>
                            <BsCaretRightFill className='icon'/>
                        </span>
                    </div>

                    {hot.map((item) => {
                        const { id } = item;
                        return(

                            <div className='card' key={id}>
                                <div className='l'>
                                    <img src={img} alt='tumblr' />
                                    <ul className='top'>
                                        <li className='logo'></li>
                                        <li className='format'></li>
                                    </ul>
                                </div>

                                <div className='r'>
                                    <li className='title'></li>

                                    <ul className='chapters'>
                                        <li className='curl'></li>
                                        <li className='pred'></li>
                                    </ul>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        </Grid>
    );
}

export default HotsComponents;
