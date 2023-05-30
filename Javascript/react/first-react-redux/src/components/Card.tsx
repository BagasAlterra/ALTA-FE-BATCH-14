import React, { FC } from "react";

interface CardProps {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  total?: number;
  handleDetail?: React.MouseEventHandler;
  handleIncrement?: React.MouseEventHandler;
  handleDecrement?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({
  id,
  title,
  description,
  image,
  price,
  total,
  handleDetail,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div className="m-5 card w-96 bg-white shadow-xl" id={id}>
      <figure>
        <img src={image} alt="Shoes" width={"100px"} height={"100px"} />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p>{description}</p>
        <div className="text-black font-semibold m-10 h-10">
          Price : $ {price}
        </div>
        <div className="text-black font-semibold m-10 h-10">
          Total Item : {total}
        </div>
        <div className="card-actions justify-end my-10 mr-10">
          <button className="btn btn-primary" onClick={handleIncrement}>
            +
          </button>
          <button className="btn btn-primary" onClick={handleDecrement}>
            -
          </button>
          <button className="btn btn-primary" onClick={handleDetail}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
