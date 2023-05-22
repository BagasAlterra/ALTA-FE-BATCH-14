import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card w-96 bg-white shadow-xl">
        <figure>
          <img
            src="https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-FFSSBREE5-REE10-DV8649-White.jpg"
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
