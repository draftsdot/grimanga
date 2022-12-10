import React, { useState, useEffect } from 'react';
import { Grid } from './styled';





const LayoutComponent = () => {

    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('src/utils/json/recent.json')
            .then((response) => response.json())
            .then(setCard);
    }, []);

    if(!card || !card.length) return null;



    return(
        <Grid>
            <div className='l-side'>
                <div className='navbar'><h1> Recentemente Adicionandos </h1></div>
                <div className='content'>
                    <div className='row'>
                        {card.map((item) => {
                            const { id, image, title, genre } = item;
                            return(

                                <div className='card' key={id}>
                                    <div className='l'>
                                        <img src={image} alt={title} />
                                    </div>

                                    <div className='r'>
                                        <li><span className='title'>{title}</span></li>
                                        <li><span className='genre'>{genre}</span></li>

                                        <li>
                                            <ul>
                                                <li><span className='curl'></span></li>
                                                <li><span className='prev'></span></li>
                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            );

                        })}
                    </div>
                </div>
            </div>

            <div className='r-side'>
                <div className='navbar'><h1> Ranking 10 </h1></div>
                <div className='content'></div>
            </div>
        </Grid>
    );
}

export default LayoutComponent;

