import * as React from 'react';
import { todoList } from '../../controller';

interface StateType {
    api: string;
    project: string;
}

export class About extends React.Component<any, StateType> {
    private _isMounted = true;

    constructor(props: any) {
        super(props);

        this.state = {
            project: ``,
            api: ``
        };
    }
    
    async componentDidMount() {
        const { data } = await todoList.getConfig();
        
        if (this._isMounted) {
            this.setState({
                project: data.project,
                api: data.api
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { project, api } = this.state;

        return (
            <div>
                <h1>About component works!</h1>
                <p>Project: <i>{project}</i></p>
                <p>Api: <i>{api}</i></p>
            </div>
        );
    }
}