import * as React from 'react';

interface GreetingsProps {
    greeting: string; 
}

export const Greetings = (props: GreetingsProps) => (
    <h1>{props.greeting}</h1>
);