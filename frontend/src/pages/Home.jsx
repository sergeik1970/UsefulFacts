import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsInfoCircle, BsPencil, BsTrash, BsPlusCircle, BsLink45Deg, BsImage } from 'react-icons/bs'
import FilterSelection from '../components/FilterSelection.jsx';

const Home = () => {

    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/facts")
            .then(response => {
                setFacts(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <>
            <div>
                <h1>Useful Facts</h1>
                <div className="buttons">
                    {/* добавить id и добавить слушатель в js */}
                    <button className="filter__button active" datatype="all" id="button__all">Show All</button>
                    <button className="filter__button" datatype="animals" id="button__animals">Animals</button>
                    <button className="filter__button" datatype="nature" id="button__nature">Nature</button>
                    <button className="filter__button" datatype="technology" id="button__tech">Technology</button>
                </div>
                <Link to={`facts/create/`} className="icon icon__create">
                    <BsPlusCircle />
                </Link>
                {loading ? (
                    <p>Loading...</p>
                ) : (     
                    <div className="cards">
                        {facts.map((fact, index) => (
                        <div className="card" data-type={fact.category} key={fact._id}>
                            <h2 className="card__title">{fact.title}</h2>
                            <img className="fact__image" src={fact.image} />
                            <p className="card__text">{fact.text}
                                <span className="badge">{fact.category}</span></p>
                            <p className="card__icons">
                                <Link to={`facts/details/${fact._id}`} className="icon icon__details">
                                    <BsInfoCircle />
                                </Link>
                                <Link to={`facts/edit/${fact._id}`} className="icon icon__edit">
                                    <BsPencil />
                                </Link>
                                <Link to={`facts/delete/${fact._id}`} className="icon icon__delete">
                                    <BsTrash />
                                </Link>
                            </p>
                        </div>
                        ))
                        }
                    <FilterSelection />
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;