import { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

const CreateFact = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSaveFact = () => {
        const data = {
            title,
            text,
            source,
            category,
            image
        };
        setLoading(true);
        axios
            .post("http://localhost:5555/facts", data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                alert("Ошибка. Смотрите сообщение в консоли")
                console.log(error)
                setLoading(false);
            });
    }
    return (
        <div>
            <BackButton />
            <h1>Add New Fact</h1>
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
                    <option value="technology">Technology</option>
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

                <button className='btn btn-save' type='button' onClick={handleSaveFact}>
                    Сохранить
                </button>

            </form>
        </div>
    );
}

export default CreateFact;