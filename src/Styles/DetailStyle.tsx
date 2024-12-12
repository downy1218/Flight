import exp from "constants";
import styled from "styled-components";

export const MainBody = styled.div`
    background-color:rgba(10, 9, 9, 1);
    width:100%;
    height:105vh;
    display:flex;
`
export const LeftContainer = styled.div`
    width:1100px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        margin-top:40px;
        width:650px;
        height:650px;
    }
`
export const Line = styled.div`
    width:0.5px;
    height:105vh;
    background-color:rgba(91, 92, 96, 1);
    margin-

`

export const RightContainer = styled.div`
    padding-left:30px;
    h1{
        color:white;
        font-size:25px;
        padding-left:15px;
    }
    h2{
        color:white;
        font-size:25px;
        padding-left:15px;
        margin-top:40px;
    }
`
export const CardContainer = styled.div`
    width:337px;
    height:400px;
    background-color:rgba(18, 32, 44, 1);
    border-radius:20px;
`

export const FlightNumber = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
    padding-left:20px;
    h1{
        padding-left:0;
        font-size:17px;
    }
    p{
        font-size:17px;
        color:rgba(111, 201, 91, 1);
        padding-left:150px;
    }
`

export const Airport = styled.div`
    display:flex;
    align-items:center;
    padding-left:20px;
    h1{
        padding-left:0;
        font-size:17px;
        color:rgba(169, 169, 169, 1);
    }
    p{
        font-size:17px;
        padding-left:180px;
        color:white;
    }
`

export const City = styled.div`
    display:flex;
    justify-content:space-around;
    
    h1{
        padding-left:0;
        color:rgba(169, 169, 169, 1);
        font-size:14px;
    }
    p{
        margin-top:0;
        color:white;
        font-size:17px;
        paddig-top:0;

    }
    
`
export const Arrive = styled.div`
    width:120px;
    height:70px;
    border-radius:10px;
    background-color:rgba(18, 18, 18, 1);
    display:flex;
    align-items:center;
    flex-direction:column;
    
`
export const Destination = styled.div`
    width:120px;
    height:70px;
    border-radius:10px;
    background-color:rgba(18, 18, 18, 1);
    display:flex;
    align-items:center;
    flex-direction:column;
`

export const Velo = styled.div`
    display:flex;
    justify-content:space-around;
    margin-top:30px;
    h1{
        padding-left:0;
        color:rgba(169, 169, 169, 1);
        font-size:14px;
    }
    p{
        margin-top:0;
        color:white;
        font-size:17px;
        paddig-top:0;

    }
`
export const Ft = styled.div`
    width:140px;
    height:70px;
    border-radius:10px;
    background-color:rgba(18, 18, 18, 1);
    display:flex;
    align-items:center;
    flex-direction:column;
`
export const Velocity = styled.div`
    width:140px;
    height:70px;
    border-radius:10px;
    background-color:rgba(18, 18, 18, 1);
    display:flex;
    align-items:center;
    flex-direction:column;
`
export const TimeInfo = styled.div`
    h1{
        color:rgba(169, 169, 169, 1);
        font-size:15px;
        margin-top:20px;
    }
    p{
        margin-top:10px;
        padding-left:20px;
        color:white;
        font-size:17px;
    }
`