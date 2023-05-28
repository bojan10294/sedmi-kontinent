/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import Link from 'components/Link';
import Text from 'components/Text';
import { getApartments } from 'lib/fetchService';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  location: string;
  title?: string;
}

const Apartments: FC<Props> = ({ location, title }) => {
  const { data } = useQuery(['apartments'], () => getApartments(location));
  const apartments = data.data;

  return (
    <section>
      <div className="container">
        {title && (
          <Text className="mb-6 font-normal text-center" tag="h2">
            {title}
          </Text>
        )}
        <div className="grid grid-cols-4 gap-4">
          {apartments.map((data: any, index: number) => (
            <Link
              key={index}
              href={`/prodaja-stanova/nekretnina/${data.attributes.Naziv}`}
            >
              <div className="relative p-4 bg-gray-100 rounded-lg">
                {data.attributes.Prodato && (
                  <span className="text-xs absolute top-6 right-4 capitalize font-medium mr-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">
                    Prodato
                  </span>
                )}
                <Image
                  alt="content"
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  height={400}
                  src={
                    data.attributes.Slike.data
                      ? `http://127.0.0.1:1337${data.attributes.Slike.data?.attributes.url}`
                      : '/img/construction-1.jpg'
                  }
                  width={720}
                />
                <h3 className="text-xs font-medium tracking-widest uppercase text-primary title-font">
                  {location}
                </h3>
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  {data.attributes.Naziv}
                </h2>
                <h2 className="text-sm font-medium text-gray-900 title-font">
                  Površina: {data.attributes.Detalji.PovrsinaKvM} m<sup>2</sup>
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;