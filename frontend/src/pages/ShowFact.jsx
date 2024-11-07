import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import { BsInfoCircle, BsPencil, BsTrash, BsPlusCircle, BsLink45Deg, BsImage } from 'react-icons/bs'

const ShowFact = () => {

    const [fact, setFact] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/facts/${id}`)
            .then(responce => {
                setFact(responce.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [id])

    return (
        <div>
            <BackButton />
            {loading ? (<p>Loading...</p>) : (
                <ul>
                    <div className="fact__info">
                        <h2 className="fact__title">{fact.title}</h2>
                        <img className="fact__image" src={fact.image} />
                        <p className="fact__text">{fact.text}</p>
                        <p className="fact__source">Source: <a href={fact.source}><BsLink45Deg className="icon" /></a></p>
                        <p className="fact__category">Category: {fact.category}</p>
                    </div>
                </ul>
            )}

        </div>
    );
}

export default ShowFact;