console.log('hello react')

import * as React from 'react'
import * as ReactDom from 'react-dom/client'

console.log(React.version)

// React.ReactNode



// React.ReactElement [TypeScript]
//  JavaScript Library
const reactElement = React.createElement('button', {
    type: 'button',
    className: 'button primary-button',
    children: '리액트 버전 확인',
}) 
// == <button><button/>     ReactElement = Object

// DOM API
const rootElement = document.getElementById('root')
// null 일때를 방지 그래서 if문
if(rootElement){
    const reactDomRoot = ReactDom.createRoot(rootElement)
    console.log(reactDomRoot.render(reactElement))
}


console.log(reactElement)
console.log(ReactDom.createRoot)





// React.Component 
