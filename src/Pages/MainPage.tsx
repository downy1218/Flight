import * as M from '../Styles/MainStyle';
import '../Styles/MainCss.css';
import SearchInput from '../Components/SearchInput';
import { useNavigate } from 'react-router-dom';
function MainPage(): JSX.Element {
    const imgUrl = process.env.PUBLIC_URL;
    const navigate = useNavigate();

    const handleGotoDetail = ()=>{
        console.log('클릭됨')
        navigate('/detail')
    };
    return (
        <M.MainBody>
            <M.Container>

                <M.Titlecontainer>
                    <M.Title>
                        <img src={imgUrl + '/Image/flightMP.png'}></img>
                        <h1>Sky Track</h1>
                        <h2>Beyond Departure  Boards 
                        - Follow Their Journey</h2>
                        <p>Real-time flight tracking with precision and elegance.</p>
                        <p> Follow any aircraft worldwide.</p>
                    </M.Title>
                </M.Titlecontainer>

                <M.EarthContainer>
                    <img src={imgUrl + '/Image/earth.svg'}></img>
                    <M.RedSpot><p>.</p></M.RedSpot>
                    <M.Spread className='core'></M.Spread>
                    <M.Spread className='middle'></M.Spread>
                    <M.Spread className='outside'></M.Spread>
                </M.EarthContainer>

                <M.Input className='input'>
                    <SearchInput placeholder = '항공편을 입력하세요..' onClick = {()=>handleGotoDetail()}/>
                </M.Input>

            </M.Container>
        </M.MainBody>
    )
}
export default MainPage;