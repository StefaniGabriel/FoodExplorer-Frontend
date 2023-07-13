import { useEffect, useRef } from 'react';

const Carousel = ({ products }) => {
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const control = carouselRef.current.querySelectorAll('.control');
    const itemCount = products.length;
    let currentSlide = 0;

    control.forEach((control) => {
      control.addEventListener('click', function () {
        const isLeft = control.classList.contains('carousel-prev');
        if (isLeft) {
          currentSlide -= 1;
        } else {
          currentSlide += 1;
        }

        if (currentSlide >= itemCount) {
          currentSlide = 0;
        }

        if (currentSlide < 0) {
          currentSlide = itemCount - 1;
        }

        itemsRef.current[currentSlide].scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
          block: 'nearest',
        });
      });
    });
  }, [products]);

}