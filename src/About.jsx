import React, { Component } from 'react'
class About extends Component {
    state = { 
        count:0,
     } 
    //  Create a function
    formatCount(){
        const {count} = this.state
        return count === 0 ?' zero':count
        // That is called object restructuring
        // return this.state.count === 0 ?' zero':this.state.count;
        // The ? stands for if, and the : stands for else
    }

    et={
        fontSize:50,
        color:'red'
    }
    // This is how to use imbedded styling in react

    // increment = () => {
    //     this.setState({count: this.state.count+1})
    // }
    render() { 
        return <div>
            
           <p className='badge badge-primary m-2'>This is from the ABOUT file</p>
           <p style={this.et}>This is from the ABOUT file</p>
           <button type="submit" className='btn btn-success'>Click</button>
           <p>{this.formatCount()}</p>
          
           <img src={this.state.img} alt=""/>
        </div>
        ;
    }
}
 
export default About;