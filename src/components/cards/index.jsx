import './index.scss';

const ImageCard = ({ image }) => (
  <div
    className='image-card'
    style={{
      background: `url(${image}) no-repeat center center`,
      backgroundSize: 'cover',
    }}
  />
);

const TextCard = ({ title, body, color }) => (
  <div className='text-card'>
    <div className='wrapper'>
      <h2 className='header-text'>{title}</h2>
      <p>{body}</p>
      <button className='header-text'>
        learn more
        <span
          className='button-border'
          style={{ backgroundColor: color }}
        ></span>
      </button>
    </div>
  </div>
);

const MixedCard = ({ image, title, body }) => (
  <div className='mixed-card' style={{
    background: `url(${image}) no-repeat center center`,
    backgroundSize: 'cover',
  }}>
    <div className="content">
      <h2 className='header-text'>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
)

const renderCard = cardDetails => {
  switch (cardDetails.type) {
    case 'text':
      return <TextCard {...cardDetails}/>;
    case 'mixed':
      return <MixedCard {...cardDetails}/>;
    default:
      return <ImageCard {...cardDetails}/>;
  }
};

const Cards = ({ displayCard }) => {
  const [first, second] = displayCard;

  return (
    <div className='cards-parent'>
      {renderCard(first)}
      {renderCard(second)}
    </div>
  );
};

export default Cards;
