import React from 'react'
import { Carousel } from 'antd';
import "./carousel.css";



export class Carousal extends React.Component {
    render() {
        const contentStyle = {
            height: '380px',
            width:'50%',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center'
          };
        return (
            <div className="body">
            <div className="carousel">
            <Carousel autoplay>
                <div>
                <h3 style={contentStyle}><img src="kgf.jpg " width="800px" height="380px"/></h3>
                </div>
                <div>
                <h3 style={contentStyle}><img src="red.jpg " width="800px" height="380px"/></h3>
                </div>
                <div>
                <h3 style={contentStyle}><img src="familyman.jpg" width="800px" height="380px"/></h3>
                </div>
                <div>
                <h3 style={contentStyle}><img src="tenet.jpeg" width="800px" height="380px"/></h3>
                </div>
            </Carousel>
            </div>
            </div>
        )
    }
}

export default Carousal
