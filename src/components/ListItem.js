import { Link } from "react-router-dom";



const ListItem = ({ image, name, rating, id, StarRating }) => {
  return (
    <Link to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listitem__info">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
        <h4 className="info__StarRating">{StarRating}</h4>
        
      </div>
    </Link>
  );
};

export default ListItem;