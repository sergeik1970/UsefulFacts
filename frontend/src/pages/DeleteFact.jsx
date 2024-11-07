import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import { Link } from 'react-router-dom';
import { BsInfoCircle, BsPencil, BsTrash, BsPlusCircle, BsLink45Deg, BsImage } from 'react-icons/bs'

const DeleteFact = () => {

    const [fact, setFact] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

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

    const handleDeleteFact = () => {
        const answer = window.confirm("Confirm?");
        if (answer === false) {
            return;
        }
        console.log("delete")
        setLoading(true);
        axios
            .delete(`http://localhost:5555/facts/${id}`)
            .then(() => {
                setLoading(false);
                navigate(`/`);
            })
    }

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
                        <p className="card__icons">
                        <button className="button__delete" onClick={handleDeleteFact} id="button__delete">Удалить</button>
                            </p>
                    </div>
                </ul>
            )}

        </div>
    );
}

export default DeleteFact;