import { API } from '../api';

class TodoList {
    
    public getConfig(): Promise<any> {
        return API.get(``);
    }
    
}

export const todoList = new TodoList();