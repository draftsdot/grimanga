import React from 'react';
import { Grid } from './styled';

// Imports Components
import HeadlineComponent from './components/headline/HeadlineComponent';
import HotsComponent from './components/hots/HotsComponent';
import LayoutComponent from './components/layout/LayoutComponent';

export const HomePage = () => {
    return(
        <Grid>
            <div className='grid_1' id='hed'>
                <HeadlineComponent />
            </div>

            <div className='grid_2' id='pop'>
                <HotsComponent />
            </div>

            <div className='grid_3' id='lay'>
                <LayoutComponent />
            </div>
        </Grid>
    );
}
