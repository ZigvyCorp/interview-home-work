export interface ICard {
  className?: string;
}

const Card = ({ className = "" }: ICard) => {
  return <div className={`${className}`}>Card</div>;
};

export default Card;
