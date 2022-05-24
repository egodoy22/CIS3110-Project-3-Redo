import React, { Component } from 'react';

import item from './item';
import dataManager from './dataManager';

class items extends Component {
    
    state = {
        items : []
        
    }; //object, 
    
    getTime(){
        let d = new Date();
        var n = d.getTime();
        return n ;
    }
    
    handleDelete = item => {
        //manipulate state 
    }
    
    handleDone = item => {
        
    }
    
    addNewItem = item => {
        
    }
    
    render(){
        return (
            <table className = "table">
            <tbody>
            {this.state.items.map((item, index) => 
            <tr key = {item.id}>
            <item index = {index+1} item = {item}
            fooDelete = {this.handleDelete} fooDoneDone = {this.handleDone} />
            </tr>
            
            )}
           
           
            <tr>
            <td coldSpan = "4" className = "text-center">
            <dataManager foodataManager = {this.addNewItem}
            dataManagerValue = {this.state.dataManagerValue} />
            </td>
            </tr>
            </tbody>
            </table>
            
            );
    }
}

export default items;