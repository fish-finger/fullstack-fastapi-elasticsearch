import { API } from '../api';

class TodoList {
    
    public getConfig(): Promise<any> {
        return API.get(``);
    }

    public addUrl(url: string): Promise<any> {
        return API.post(`host/url`, { url: url });
    }
    
}

export const todoList = new TodoList();