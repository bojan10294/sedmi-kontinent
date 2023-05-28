import { FC } from 'react';
import Text from 'components/Text';
import BackgroundImage from 'components/BackgroundImage';
import { getSingleLocation } from 'lib/fetchService';
import { useQuery } from '@tanstack/react-query';

interface Props {
  title: string;
  bgImageSrc: string;
  alt: string;
  subheading?: string;
}

const MiniHero: FC<Props> = ({ title, alt, bgImageSrc, subheading }) => {
  const { data } = useQuery(
    ['location'],
    () => getSingleLocation(subheading || ''),
    {
      enabled: !!subheading
    }
  );
  const locationData = data?.data[0];
  // console.log(subheading);
  return (
    <section className="relative items-center pt-20 pb-10 overflow-hidden md:pt-36 bg-gray-dark">
      <BackgroundImage
        alt={alt}
        className="grayscale"
        opacity="50"
        src={bgImageSrc}
      />
      <div className="container relative md:flex md:items-center md:flex-col md:justify-end">
        <Text
          bold={false}
          className={`text-white ${
            subheading ? 'lg:!text-5xl' : 'lg:!text-6xl'
          } uppercase`}
          styling="h1"
          tag="h1"
        >
          {title}
        </Text>
        {subheading && (
          <Text
            className="!font-medium text-primary mt-4"
            styling="h3"
            tag="h2"
          >
            {locationData.attributes.Adresa},{' '}
            {locationData.attributes.Grad.data.attributes.Naziv}
          </Text>
        )}
      </div>
    </section>
  );
};

export default MiniHero;
