import { Component } from "react";

interface CardProps {
  id: string;
  label?: string;
  title?: string;
  description?: string;
  image?: string;
}

class Card extends Component<CardProps> {
  render() {
    const { id, title, label, description, image } = this.props;

    return (
      <div className="m-5 card w-96 bg-base-100 shadow-xl" id={id}>
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{label}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
