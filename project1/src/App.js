import { use, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

// 부모 -> 자식이기에 App.js에 카운터 앱에 사용할 State 작성
function App() {
  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count}/>
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App;

