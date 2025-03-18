import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <h1>Doomsday Clock</h1>
            <Clock />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));