import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css'

class MainComponent extends Component {
    constructor(){
        super();
        const patterns =[['red','blue','green','yellow'],['red','green','blue','yellow']]; 
        this.state ={
            level:0,
            patterns:patterns,
            currentPattern:patterns[0],
            red:"",
            green:"",
            yellow:""
        }
    }
    
    playPattern(){
        this.state.currentPattern.forEach(element => {
           // setInterval(()=>{this.highlight(element);},3000)
             this.highlight(element);
             this.removehighlight(element);
        });
    }
    removehighlight(element){
        this.setState({[element]:"" });
    }
    highlight(element){
        console.log({[element]:"highlight" });
        this.setState({[element]:"highlight" });
    }   

    
    render(){
        return(<div>
            <header><h1>Pattern Game</h1> <h4>Level 1</h4></header>
            <section>
                <div className={"box red "+this.state.red }></div>
                <div className={"box blue "+this.state.blue }></div>
                <div className={"box green "+this.state.green }></div>
                <div className={"box yellow "+this.state.yellow }></div>
            </section>
            <footer><button onClick={this.playPattern.bind(this)}>PLAY</button></footer>
        </div>
            )
    }
}
export default MainComponent;