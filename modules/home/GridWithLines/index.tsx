import Link from 'components/Link';
import Text from 'components/Text';

export interface gridItem {
  title: string;
  description: string;
  linkUrl?: string;
  linkText?: string;
}

interface Props {
  gridItems: gridItem[];
}

const GridWithLines = ({ gridItems }: Props) => (
  <div className={`container grid gap-y-8 lg:grid-cols-${gridItems.length}`}>
    {gridItems.map(({ title, description, linkText = '', linkUrl = '' }) => (
      <div
        key={title}
        className="px-6 text-center md:border-r md:last:border-r-0 md:border-r-gray md:first:pl-0 md:last:pr-0"
      >
        <Text className="mb-2 md:mb-5" tag="h4">
          {title}
        </Text>
        <Text>{description}</Text>
        {linkText && (
          <Link className="mt-4" href={linkUrl} variant="arrow">
            {linkText}
          </Link>
        )}
      </div>
    ))}
  </div>
);

export default GridWithLines;
