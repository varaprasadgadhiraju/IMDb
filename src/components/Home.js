import React from 'react';
import Banner from './banner';
import Carousel from './carousel';

class Home extends React.Component{
    render(){
        return(
            <>
                <Banner/>
                <Carousel/>
            </>
        )
    }
}

export default Home;