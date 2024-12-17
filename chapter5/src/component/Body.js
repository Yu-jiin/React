import "./Body.css"
function Body(props) {
    console.log(props)
    // 이러한 JSX는 객체는 지원하지 않음
    const number = 1
    const numA = 1
    const numB = 3
    const strA = "안녕"
    const strB = "리액트"
    // 객체 렌더링 하고싶으면
    const objA = {
        a: 1,
        b: 2
    }
    const num = 19
    const {name, location} = props
    console.log(name, location)
    return(
        <div>
            <h1 style={{backgroundColor: "red", color: "blue"}}>body</h1>
            <h2 className="body">{number}</h2>
            <h3>{numA + numB}</h3>
            <h3>{strA + strB}</h3>
            <h3>a: {objA.a}</h3>
            <h3>b: {objA.b}</h3>
            <h2>
                {num}은(는) {num % 2 == 0 ? "짝수" : "홀수"} 입니다.
            </h2>
            <h1>{props.name}은 {props.location}에 거주합니다.</h1>
        </div>
    )
}
export default Body