import { API } from '../api';

class TodoList {
    
    public getConfig(): Promise<any> {
        return API.get(``);
    }

    public addUrl(url: string): Promise<any> {
        return API.post(`host/url`, { url: url });
    }

    public getUrls(): Promise<any> {
        return API.get(`host/url`);
    }
    
}

export const todoList = new TodoList();