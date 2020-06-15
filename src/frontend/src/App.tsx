import * as React from 'react';
import { Greetings } from './components/Greetings';
import { todoList } from './controller';

interface StateType {
    project: string;
    version: string;
}

export class App extends React.Component<any, StateType> {

    private _isMounted = true;

    constructor(props: any) {
        super(props);

        this.state = {
            project: ``,
            version: ``
        };
    }
    
    async componentDidMount() {
        const { data } = await todoList.getConfig();
        
        if (this._isMounted) {
            this.setState({
                project: data.project,
                version: data.version
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { project, version } = this.state;

        return (
            <Greetings greeting={`Application from ${project} project v${version} running...`}></Greetings>
        );
    }

}