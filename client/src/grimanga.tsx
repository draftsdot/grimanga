import React from 'react';
import { ThemeProvider } from 'styled-components';
import prettier from './styles/prettier/prettier';
import { Grid } from './styles/styled';
import GlobalStyle from './styles/global';

// import components
import Header from './components/layout/header/Header';
import Routes from './pages/routes/Routes';



const Grimanga = () => {
    return(
        <ThemeProvider theme={prettier}>
            <Grid>
                <Header />
                <div className='router'>
                    <div className='container'>
                        <div className='maxwidth'>
                            <Routes />
                        </div>
                    </div>
                </div>
                <GlobalStyle />
            </Grid>
        </ThemeProvider>
    );
}

export default Grimanga;
