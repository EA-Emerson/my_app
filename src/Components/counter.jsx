import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../../src/'

class Counter extends Component {
    state = { 
        count:6,
        // imgurl:"https://picsum.photos/300"
     }; 
     
    counter(){
        const {count}=this.state;
        return count === 0 ? 'zero' : count;
     }
    //  countPlus(){
    //     const {count} = this.state;
    //     return count +1
    //  }

    render() { 
        return (
        <React.Fragment>
            <h1 className='badge badge-primary m-2'>Hello World</h1>
            {/* <img src={this.state.imgurl} alt="This is an"/> */}
            <span>{this.state.count}</span>
            <h2>{this.counter()}</h2>
            <button>Increment</button>
        </React.Fragment>);
    }
}
 
export default Counter;