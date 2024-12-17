import { useState, useEffect } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

// 부모 -> 자식이기에 App.js에 카운터 앱에 사용할 State 작성
function App() {
  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }

  useEffect(() => {
    console.log("count 업데이트: ", count)
  }, [count])

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count}/>
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App;

