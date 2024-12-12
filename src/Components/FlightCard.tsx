import * as F from '../Styles/DetailStyle';

function FlightCard():JSX.Element{
    return(
        <F.CardContainer>
            <F.FlightNumber>
                <img src='/Image/flightY.svg'></img>
                <h1>KE123</h1>
                <p>운항 중</p>
            </F.FlightNumber>

            <F.Airport>
                <h1>항공사</h1>
                <p>대한항공</p>
            </F.Airport>

            <F.City>
                <F.Arrive>
                    <h1>출발</h1>
                    <p>인천</p>
                </F.Arrive>
                <img src='/Image/flight-landing.svg'></img>
                <F.Destination>
                    <h1>도착</h1>
                    <p>미국</p>
                </F.Destination>
            </F.City>


            <F.Velo>
                <F.Ft>
                    <h1>고도</h1>
                    <p>35,000 ft</p>
                </F.Ft>
                <F.Velocity>
                    <h1>속도</h1>
                    <p>850 km/h</p>
                </F.Velocity>
            </F.Velo>
            <F.Velo>
                <F.Ft>
                    <h1>지상 여부</h1>
                    <p>지상</p>
                </F.Ft>
            </F.Velo>
        </F.CardContainer>
    )
}

export default FlightCard;