import * as React from 'react';
import { todoList } from '../../controller';
import './style.css';

export const Home = () => {
    let isLoading = true;
    const [textInput, setTextInput] = React.useState(`http://`);
    const [urlList, setUrlList] = React.useState([]);
    const loadUrlList = async () => {
        const geturlsResponse = await todoList.getUrls();

        if (geturlsResponse.data) {
            const { hits } = geturlsResponse.data.hits;
            setUrlList(hits);
        }
    };
    const handleChange = (event: any) => (setTextInput(event.target.value));
    const onClickDownload = async () => {
        const doc = textInput.startsWith('http://') ? textInput : `http://${textInput}`;
        const addResponse = await todoList.addUrl(doc);
        
        if (addResponse.data) loadUrlList();
    };

    React.useEffect(() => {
        loadUrlList();
    }, []);
    
    return (
        <div>
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
            <div className="list-urls-sec">
                <ul>
                    {
                        urlList.map((url, i) => {
                            return ( 
                                    <li key={i}>
                                        <a href={url._source.url} 
                                        target="_blank">{url._source.url}</a>
                                    </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};