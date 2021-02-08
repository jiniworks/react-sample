import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';



// Props 를 이용해서 구조화 하기
const customers = [{
    'id' : 1,
    'name' : '홍길동',
    'birthday' : '870413',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'name' : '김갑동',
    'birthday' : '810411',
    'gender' : '여자',
    'job' : '직장인'
  },
  {
    'id': 3,
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
]

// JSX의 특징은 내부 데이터가 2개 이상이라면 반드시 <div>와 같은 태그로 감싸서 사용
// class App extends Component{
//   render(){
//     return (
//       <div>
//         <Customer
//           id={customers[0].id}
//           name={customers[0].name}
//           birthday={customers[0].birthday}
//           gender={customers[0].gender}
//           job={customers[0].job}
//         />
//         <Customer
//         id={customers[1].id}
//         name={customers[1].name}
//         birthday={customers[1].birthday}
//         gender={customers[1].gender}
//         job={customers[1].job}
//       />
//       <Customer
//         id={customers[2].id}
//         name={customers[2].name}
//         birthday={customers[2].birthday}
//         gender={customers[2].gender}
//         job={customers[2].job}
//       />


//     </div>
//     )
//   }
// }

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c =>{
          return <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>
    )
  }


}


export default App;












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <a href="#" >Hello World!! </a>
//       </header>
//     </div>
//   );
// }

// export default App;
