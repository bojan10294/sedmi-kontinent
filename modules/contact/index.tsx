import Text from 'components/Text';
import ContactForm from 'modules/contact/ContactForm/index';
import GridWithLines, { gridItem } from 'modules/home/GridWithLines';

const aboutUs: gridItem[] = [
  {
    description: 'office@sedmi-kontinet.rs',
    linkText: 'Pošaljite mejl',
    linkUrl: 'mailto:office@sedmi-kontinet.rs',
    title: 'E-mail'
  },
  {
    description: '+38160 53 81 714',
    linkText: 'Pozovite nas',
    linkUrl: 'tel:+381605381714',
    title: 'Telefon'
  },
  {
    description: 'Beograd, Srbija',
    title: 'Lokacija'
  }
];

const Contact = () => (
  <>
    <section>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="mb-6 text-center lg:mb-14">
          <Text className="mb-3" styling="h2" tag="h1">
            Da li imate dodatna pitanja?
          </Text>
          <Text className="max-w-4xl mx-auto lg:text-lg">
            Pozovite nas ili nam pošaljite e-mail
          </Text>
        </div>
        <GridWithLines gridItems={aboutUs} />
      </div>
    </section>
  </>
);

export default Contact;
