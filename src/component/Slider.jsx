import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useState } from "react";
import styled from "styled-components";


const Slider = () => {

    // const wraper = styled.div`
    //     height : 100%;
    //     display : flex;
    //     transition : all 1.5s e;
    //     transform : translateX(${(props)=>props.slideIndex * -100}vW)
    // `;


    return (
        <div className=" ">
        <Carousel>
            <Carousel.Item className="h-[100vh] w-[100%]">
                <img
                    className="w-100 h-100"
                    src="../assets/images/cat1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h-[100vh] w-[100%]">
                <img
                    className="w-100 h-100"
                    src="../assets/images/cat2.png"
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