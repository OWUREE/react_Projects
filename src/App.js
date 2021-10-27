import React from 'react';
import CardList from './CardList';
import {SearchBox} from './SearchBox'
import {robots} from './robots';
import './App.css'

class App extends React.Component{
    constructor () {
        super() 
        this.state = {
            robots : robots ,
            searchField : ''    
        }
    }
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
       
    }
    
    render () {
        const filteredRobots = this.state.robots.filter(robots => {  /*to filter robots searched for in the searchField */
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className = 'f1'> RoboFriends </h1>
                <SearchBox  searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots} /> {/*instead of using 'this.state.robots', we now use 'filteredRobots'*/}
            </div>
            
        )
    }  
   
}
export default App