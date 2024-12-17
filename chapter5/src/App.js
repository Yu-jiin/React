import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

  
  // 컴포넌트의 이름은 첫 문자가 꼭 대문자
  
  // 첫 컴포넌트
  // function Header() {
  //   return (
  //     <header>
  //       <h1>header</h1>
  //     </header>
  //   );
  // }
  
  // 이거도 가능
  // const Header = () => {
  //   return (
  //     <header>
  //     <h1>Header</h1>
  //   </header>
  //   )
  // }