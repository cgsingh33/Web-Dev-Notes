import React from 'react';
import Joke from './Joke';

import jokesData from './JokesData';

function App(){
    const jokeComponent=jokesData.map(function(joke){
        return(
            <Joke key={joke.id}
            question={joke.question} punchLine={joke.punchLine}/>
        )
    })
    return(
        <div>
            {jokeComponent}
        </div>
    )
}

export default App;