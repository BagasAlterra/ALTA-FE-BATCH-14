import { FC } from 'react'

interface CardProps {
    id: string;
    label?: string;
    title?: string;
    description?: string;
    image?: string;
}

const Card: FC<CardProps> = ({ id, label, title, description, image }) => {
    return (
        <div className="m-5 card w-96 bg-base-100 shadow-xl" id={id}>
            <figure>
                <img src={image} alt="Shoes" width={"100px"} height={"100px"} />
            </figure>
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{label}</button>
                </div>
            </div>
        </div>
    )
}

export default Card