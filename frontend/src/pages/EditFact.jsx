import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';

const EditFact = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/facts/${id}`)
            .then(responce => {
                setTitle(responce.data.title);
                setText(responce.data.text);
                setSource(responce.data.source);
                setCategory(responce.data.category);
                setImage(responce.data.image);

                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [id])

    const handleEditFact = () => {
        const data = {
            title,
            text,
            source,
            category,
            image
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/facts/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate(`/facts/details/${id}`);
            })
            .catch(error => {
                console.log(error);
                alert("Ошибка. Смотрите сообщение в консоли")
                console.log(error)
                setLoading(false);
            });
        };

    return ( 
        <div>
            <BackButton />
            <h1>Edit Fact</h1>
            {loading ? <p>Loading...</p> : ''}

            <form>
                <p>
                <label className='from-label'>Title</label>
                <input
                    id='titleInput'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='from-control'
                />
                </p>

                <p>
                <label className='from-label'>Text</label>
                <textarea
                    id='textInput'
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='from-control'
                    rows='12'
                ></textarea>
                </p>

                <p>
                <label className='from-label'>Source</label>
                <input
                    id='sourceInput'
                    type='text'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className='from-control'
                />
                </p>

                <p>
                <label className='from-label'>Category</label>
                <select value={category} type='text' className='from-control' onChange={(e) => setCategory(e.target.value)} id="categoryInput">
                    <option value="nature">Nature</option>
                    <option value="animals">Animals</option>
                    <option value="tecnology">Tecnology</option>
                    <option value="architecture">Architecture</option>
                </select>
                </p>

                <p>
                <label className='from-label'>Image URL</label>
                <input
                    id='imageInput'
                    type='text'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='from-control'
                />
                </p>

                <button className='btn btn-save' type='button' onClick={handleEditFact}>
                    Сохранить изменения
                </button>

            </form>
        </div>

        

        
     );
}
 
export default EditFact;