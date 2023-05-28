import SwiperComponent from 'components/Swiper';
import Text from 'components/Text';
import { FC } from 'react';

export interface ListItem {
  description: string;
  img: string;
  title: string;
}

const swiperItems = [
  '/img/reference/ref-1.jpg',
  '/img/reference/ref-2.jpg',
  '/img/reference/ref-3.jpg',
  '/img/reference/ref-4.jpg',
  '/img/reference/ref-5.jpg'
];

const GalleryWithText: FC = () => (
  <section id="reference">
    <div className="container">
      <div className="flex flex-col items-center mb-6">
        <Text className="uppercase" separator="wide" tag="h2">Reference</Text>
      </div>
      <div className="grid gap-16 md:gap-24">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-14">
          <div>
            <Text separator="narrow" styling="h4" tag="h3">
              Zgrada - Djordja Tomasevica 55
            </Text>
            <Text
              className="mb-6"
            >
              Ventilisana fasada je jedna od najefikasnijih metoda izolacije i oblaganja zidova zgrada. Ovaj tip fasade se sastoji od slojeva koji u kombinaciji omogućavaju prirodnu cirkulaciju vazduha kroz spoljnu stranu zida. Ovaj princip stvara termalni pojas između fasade i unutrašnjeg zida, koji značajno smanjuje gubitke toplote i hladnoće, štiti zidove od vlage, povećava energetsku efikasnost i doprinosi uštedi energije.
            </Text>
          </div>
          <div className="w-full max-w-[calc(100vw_-_2rem)]">
            <SwiperComponent swiperItems={swiperItems} />
          </div>
        </div>
      </div>
    </div>
  </section>
  );

export default GalleryWithText;
