export const Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 7,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
