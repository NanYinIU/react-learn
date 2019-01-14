import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*  元素渲染 */
// const element = <h1>Hello, world</h1>;
// function tick(){
//     const element = (
//     <div>
//         <h1>hello world</h1>
//         <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick,100);

/* props  */
// 第一种方法直接使用js函数
// function Welcome(props) {
//     return <h1>hello {props.name}</h1>
// }
// // 使用 ES6 class 创造组件
// class Welcome2 extends React.Component{
//     render() {
//         return <h1>hello2 {this.props.name}</h1>
//     }
// }
// ReactDOM.render(<Welcome2 name='Gao'/>, document.getElementById('root'));

/* state 和生命周期*/

// class Clock extends React.Component{
//     /*添加局部状态
//     * 状态与属性十分相似，但是状态是私有的，完全受控于当前组件。
//     * */
//     constructor(props){
//         super(props);
//         this.state = {date:new Date()}
//     }
//     /* 生命周期
//      * 每当Clock组件第一次加载到DOM中的时候，我们都想生成定时器，这在React中被称为挂载
//      * 同样，每当Clock生成的这个DOM被移除的时候，我们也会想要清除定时器，这在React中被称为卸载。
//      */
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//     // 挂载
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(),1000)
//     }
//
//     // 卸载
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>hello world</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
// );

class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => {
            return ({
                isToggleOn: !prevState.isToggleOn
            });
        })
    }

    render() {
        return (
        <button onClick={this.handleClick}>
            {this.state.isToggleOn?'On':'False'}
        </button>
        )
    }

}

ReactDOM.render(<Toggle/>,document.getElementById('root'));



