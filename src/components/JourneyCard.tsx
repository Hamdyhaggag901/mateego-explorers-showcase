import { Link } from "react-router-dom";

interface Props {
  image: string;
  label: string;
  title: string;
  description: string;
  details: string;
  price: string;
  link: string;
}

const JourneyCard = ({ image, label, title, description, details, price, link }: Props) => {
  return (
    <div className="group card-image-hover flex flex-col bg-white">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 label-tag text-white bg-gold/90 px-3 py-1">
          {label}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-[26px] leading-tight mb-2">{title}</h3>
        <p className="body-muted text-[15px] mb-3">{description}</p>
        <p className="text-xs text-muted-foreground mb-2">{details}</p>
        <p className="font-body font-bold text-sm mb-4">{price}</p>
        <Link
          to={link}
          className="mt-auto label-tag text-gold hover:text-[#8a7243] transition-colors"
        >
          View Journey →
        </Link>
      </div>
    </div>
  );
};

export default JourneyCard;
