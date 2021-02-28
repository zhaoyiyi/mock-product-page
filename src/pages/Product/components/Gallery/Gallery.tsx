import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '~/pages/Product/Product.type';

import classes from './Gallery.module.scss';

SwiperCore.use([Navigation, Pagination]);

export function Gallery({ images }: { images: Product['images'] }): JSX.Element {
  return (
    <div>
      <div className={classes.imageGallery}>
        <Swiper className={classes.swiper} pagination={{ clickable: true, el: '#swiperPagination' }}>
          {images.map((imageUrl, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={imageUrl} alt="product image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div id="swiperPagination" className={classes.swiperPagination} />
      </div>

      <div className={classes.desktopGallery}>
        <div className={classes.imageThumbnails}>
          {images.map((imageUrl, index) => {
            return (
              <a href={`#image-${index}`} key={index}>
                <img src={imageUrl} alt="product image" />
              </a>
            );
          })}
        </div>
        <div className={classes.imageList}>
          {images.map((imageUrl, index) => {
            return <img id={`image-${index}`} src={imageUrl} alt="product image" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
