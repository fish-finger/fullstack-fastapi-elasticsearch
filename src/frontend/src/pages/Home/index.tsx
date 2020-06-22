import * as React from 'react';
import { todoList } from '../../controller';
import { List } from '../../components/List';
import './style.css';

const onClickOpenUrlOnBrowser = (url: string) => (window.open(url, '_blank'));

export const Home = () => {
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
                            onClick={() => onClickDownload()}>Send</button>
                </div>
            </div>
            <div className="list-urls-sec">
                <List 
                    items={urlList}
                    onClickEvent={onClickOpenUrlOnBrowser}
                />
            </div>
        </div>
    );
};