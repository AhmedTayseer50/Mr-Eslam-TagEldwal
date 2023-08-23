import React, { useState } from 'react';
import './Section4.css';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        src: '/images/add1.png',

        key: 1,
    },
    {
        src: '/images/add2.png',

        key: 2,
    },
];

const Section4 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src}  className='images11' />

            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className='back'
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
                className='color'
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
                className='color'
            />
        </Carousel>
    );
};

export default Section4;


