import {useState} from "react";

function Header() {
  const [count, setCount] = useState(0)
  const onIncrease = () => {
    setCount(count + 1)
  }

  return (
    <header>
      <h1>header</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </header>
  )
}

// 이거 없으면 죽음뿐이다다
export default Header