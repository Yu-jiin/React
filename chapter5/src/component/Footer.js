function Footer({name, location, favorList = []}) {
    console.log(name, location, favorList)
    return (
        <footer>
            <h1>
                footer
            </h1>
            <h3>{favorList.length}개의 음식을 좋아한다.</h3>
        </footer>
    )
}

// 백엔드 서버가 제공하는 데이터를 Props로 주고받는데,
// 예상치 못한 서버 오류로 인해 정상적인 값을 주고 받지 못할 시 오류를 방지
// defaultProps : 컴포넌트가 받을 Props의 기본값 미리 설정
// Footer.defaultProps = {
//     favorList: [],
// }
// 근데 최근엔 그냥 favorList = [] 로 

export default Footer