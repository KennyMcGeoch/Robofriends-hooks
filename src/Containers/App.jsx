import React, { useState, useEffect} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';

function App (){

const [robots, setRobots] = useState([])
const [searchfield, setSearchfield] = useState("")
const [count, setCount] = useState(0) // Count isn't used in code other than to count

useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {setRobots(users )});
},[count])


const onSearchChange = (event) => {
    setSearchfield(event.target.value)
    }


const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
})
return( 
<div className="tc">
    <h1 className="f1">RoboFriends</h1>
    <button onClick={()=>setCount(count+1)}>Click me !!!</button>
    <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots}/>
            </ErrorBoundary>
        </Scroll>
</div>);
}

  export default App;