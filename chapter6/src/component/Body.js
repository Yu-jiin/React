import { useState } from "react"
function Body() {
    const [text, setText] = useState("");
    const HandleOnChange = (e) => {
        setText(e.target.value);
    }

    const [date, setDate] = useState("")
    const handleOnChange = (e) => {
        console.log("변경된 값 : ", e.target.value)
        setDate(e.target.value);
    }

    const [option, setOption] = useState("")
    const handleOnChange2 = (e) => {
        console.log("변경 : ", e.target.value)
        setOption(e.target.value)
    }

    const [text1, setText1] = useState("")
    const handleOnChange3 = (e) => {
        console.log("변경 : ", e.target.value)
        setText1(e.target.value)
    }

    return (
        <div>
        <h1>Body</h1>

        <input onChange={HandleOnChange}/> 
        <div>{text}</div>

        <input type="date" value = {date} onChange={handleOnChange}/> 

        <div>
            <select value={option} onChange={handleOnChange2}>
                <option key={"1번"}>1번</option>
                <option key={"2번"}>2번</option>
                <option key={"3번"}>3번</option>
            </select>
        </div>

        <textarea value={text1} onChange={handleOnChange3}></textarea>

        </div>
    )
}

export default Body