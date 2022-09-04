import { Box, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = () => {
  const [carousels, setCarousels] = useState();

  useEffect(() => {
    fetch(`http://localhost:1337/api/carousels?populate=image`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) {
          console.log('ERROR');
        }
        setCarousels(data.data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w={['80%', '80%', '80%', '80%', '80%', '60%']} mt="10">
      <Slider {...settings}>
        {carousels &&
          carousels.map((carousel) => (
            <Image
              key={carousel.id}
              src={carousel.attributes.image.data.attributes.url}
              alt={`Slider imagen ${carousel.id}`}
              w="80%"
            />
          ))}
      </Slider>
    </Box>
  );
};
