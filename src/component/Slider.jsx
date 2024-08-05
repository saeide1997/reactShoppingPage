import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useState } from "react";
import styled from "styled-components";
import img1 from '../assets/images/cat1.png'
import img2 from '../assets/images/cat2.png'


const Slider = () => {

    // const wraper = styled.div`
    //     height : 100%;
    //     display : flex;
    //     transition : all 1.5s e;
    //     transform : translateX(${(props)=>props.slideIndex * -100}vW)
    // `;


    return (
        <div className=" ">
        <Carousel data-bs-theme="dark" className="h-[80vh] w-[100%] bg-slate-100">
            <Carousel.Item >
                <img
                    className="h-[80vh]"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className="">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="h-[80vh]"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Slider;