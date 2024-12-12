import * as D from '../Styles/DetailStyle';
import '../Styles/MainCss.css';
import SearchInput from '../Components/SearchInput';
import FlightCard from '../Components/FlightCard';

function DetailPage(): JSX.Element {
    const handleSearch = ()=>{
        console.log('검색하는 버튼')
    }
    return (
        <D.MainBody>
            <D.LeftContainer>
                <img src='/Image/DetailEarth.png'></img>
            </D.LeftContainer>

            <D.Line/>

            <D.RightContainer>
                <h1>다른 항공편 검색하기</h1>
                <SearchInput placeholder='항공편을 입력하세요...' onClick={()=>handleSearch()}/>
                <h2>실시간 운행 정보</h2>
                <FlightCard/>
                <D.TimeInfo>
                    <h1>위치 정보 최종 업데이트 시간</h1>
                    <p>2024.12.12 06 AM</p>
                </D.TimeInfo>
            </D.RightContainer>
        </D.MainBody>
    )
}
export default DetailPage;