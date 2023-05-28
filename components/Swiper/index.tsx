import Image from 'next/image';
import { FC } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

interface Props {
  swiperItems?: string[];
}

const SwiperComponent: FC<Props> = ({ swiperItems }) => (
  <Swiper
    modules={[Navigation, Pagination, A11y, Thumbs]}
    navigation
    pagination={{ clickable: true }}
    slidesPerView={1}
    spaceBetween={50}
  >
    {swiperItems?.map((item) => (
      <SwiperSlide key={item}>
        <Image alt="slider image" className="object-contain w-full aspect-video" height={400} src={item} width={600} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperComponent;
