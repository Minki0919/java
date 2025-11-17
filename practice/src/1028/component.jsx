function CompornentPage(props) {

    function onClickEvent() {
        alert("현재 구성중인 페이지 입니다.");
    }

    return (
        <div>
            <h1>네비게이션 만들기</h1>

            <h2>기존 네비게이션</h2>

            <nav>
                <ul>
                    <li onClick={onClickEvent}>A</li>
                </ul>
            </nav>

            <p>props 를 활용한 네비게이션 바</p>

            <nav>
                <ul>
                    {props.tabs.map((item) => (
                        <li 
                            key={item.id}
                            onClick={() => onClickEvent(item.id)}
                        >
                            {item.tab}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default CompornentPage;
