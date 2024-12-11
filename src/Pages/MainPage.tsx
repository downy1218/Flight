import * as M from '../Styles/MainStyle';
import '../Styles/MainCss.css';

function MainPage(): JSX.Element {
    const imgUrl = process.env.PUBLIC_URL;
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

            </M.Container>
        </M.MainBody>
    )
}
export default MainPage;