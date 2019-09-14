import React from "react"

import "./App.css"

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
       newItem : "",
       list : []
    }
  }
  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id : Date.now(),
        value : todoValue,
        isDone : false
      };
      const list = [...this.state.list]; // all the value in to the list
      list.push(newItem);

      this.setState({
        list,
        newItem : ""
      });
    }
  }
  deleteItem(id){
    const list = [...this.state.list]; //copy of the list
    const updatedList = list.filter(item => item.id !== id); //updated list but skip the id which matches id
    this.setState({
      list : updatedList
    })

  }
  updateInput(input){
    this.setState({
      newItem : input
    })
  }
  
  render(){
    return(
      <div className = "App">
      <h1 className="heading">TO-DO-APP</h1>
        <div className ="Container">
          <h4>Add a To Do</h4>
            <input type="text" className="input-text" placeholder="write a todo" required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}/>
            <button className="add-btn"
                    onClick={() => this.addItem(this.state.newItem)}
                    disabled={!this.state.newItem.length}
                    >Add</button>       

            <div className="container">
              <ul className="list">
              {this.state.list.map(item => {
                return(
                        <li key={item.id}>
                          <input type="checkbox"
                                name="isDone"
                                checked={item.isDone}
                                onChange={() => {}}/>
                                {item.value}
                                <button
                                className="del-btn"
                                onClick={() =>this.deleteItem(item.id)}>Delete</button>
                        </li>
                 );
              })}
                <li>
                    <input type="checkbox" className="chk-box"/>
                    Add react on my resume 
                    <button className="del-btn">Delete</button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default App;