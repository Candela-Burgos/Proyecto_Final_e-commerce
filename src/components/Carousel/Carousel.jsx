import { Box, Button, Flex, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { QSFilters } from '../../utils/QSFilters';

export const Carousel = () => {
  const [carousels, setCarousels] = useState([]);
  const { filtersById, setActualImage, actualImage } = QSFilters();
  // const [opacityStyle, setOpacityStyle] = useState('opacity="0"');

  useEffect(() => {
    fetch(`http://localhost:1337/api/carousels?populate=image&${filtersById}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) {
          console.log('ERROR');
        }
        setCarousels(data.data);
      });
  }, [filtersById]);

  // useEffect(() => {
  //   fetch(`http://localhost:1337/api/carousels?populate=image`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data.data) {
  //         console.log('ERROR');
  //       }
  //       setCarousels(data.data);
  //     });
  // }, []);

  // console.log(
  //   carousels.map((carousel) => carousel.attributes.image.data.attributes.name)
  // );

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    // <Box w="60%" mx="auto" my="10">
    //   <Slider {...settings}>
    //     {carousels &&
    //       carousels.map((carousel) => (
    //         <Image
    //           key={carousel.id}
    //           src={carousel.attributes.image.data.attributes.url}
    //           alt={`Slider imagen ${carousel.id}`}
    //           w="80%"
    //         />
    //       ))}
    //   </Slider>
    // </Box>

    <Flex
      w="80%"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      flexDirection="column"
      m="3em 0 1em 0"
    >
      {carousels &&
        carousels.map((carousel) => (
          <Image
            key={carousel.id}
            src={carousel.attributes.image.data.attributes.url}
            alt={`Slider imagen ${carousel.id}`}
            w="80%"
            opacity="1"
            transition="1s"
            // opacityStyle
          />
        ))}
      <Flex
        w="auto"
        justifyContent="center"
        alignItems="center"
        my="3em"
        gap={5}
      >
        <Button
          onClick={() =>
            actualImage === 1
              ? setActualImage(actualImage + 3)
              : setActualImage(actualImage - 1)
          }
          // opacityStyle
        >
          {'<'}
        </Button>
        <Button
          onClick={() =>
            actualImage === 4
              ? setActualImage(actualImage - 3)
              : setActualImage(actualImage + 1)
          }
          // opacityStyle
        >
          {'>'}
        </Button>
      </Flex>
    </Flex>
  );
};
