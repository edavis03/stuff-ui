import React, {useEffect} from 'react';
import './App.css';

const App = () => {
    const [stuff, setStuff] = React.useState<string[]>([]);

    const fetchStuff = async () => {
        const fetchedStuff = await fetch('/stuff').then(res => res.json());
        await setStuff(fetchedStuff);
    };

    useEffect(() => {
        fetchStuff();
    }, [])

    return (
        <div className="App">
            <div>A LIST OF STUFF</div>
            <ul>
                {stuff.map(thing => {return (<li>{thing}</li>)})}
            </ul>
        </div>
    );
}

export default App;
