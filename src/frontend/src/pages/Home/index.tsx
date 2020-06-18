import * as React from 'react';
import { todoList } from '../../controller';
import './style.css';

export const Home = () => {
    const [textInput, setTextInput] = React.useState(`http://`);
    const handleChange = (event: any) => (setTextInput(event.target.value));
    const onClickDownload = async () => {
        const { data } = await todoList.addUrl(
            textInput.startsWith('http://') ? textInput : `http://${textInput}`
        )
    };
    
    return (
        <div className="fetch-form">
            <div>
                <input 
                    type="text"
                    name="input-text"
                    className="input-text"
                    value={textInput}
                    onChange={handleChange}/>
                <button className="button button-full"
                        type="button"
                        onClick={() => onClickDownload()}>Download</button>
            </div>
        </div>
    );
};