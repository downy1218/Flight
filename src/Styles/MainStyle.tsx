import styled from "styled-components";

export const MainBody = styled.div`
    background-color:rgba(10, 9, 9, 1);
    width:100%;
    height:100vh;
`
export const Container = styled.div`
    
`
export const EarthContainer = styled.div`
    padding-top:40px;
    position:relative;
    z-index:1;
    width:600px;
    height:600px;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin: 0 auto;      /* 컨테이너 자체를 가운데로 정렬 */
    img{
        width:100%;
        height:100%;
        object-fit:contain;
        user-select: none;
        user-drag: none;
        position:relative;
        z-index:10;
    }
`

export const Titlecontainer = styled.div`
    display:flex;
    margin-bottom:0;
    margin-top:0;
    
`
export const Title = styled.div`
    position:absolute;
    z-index:5;
    // display:flex;
    color:white;
    gap:20px;
    align-items:center;
    margin-top:94px;
    margin-left:38px;
    user-select: none;
    img{
        width:40px;
        height:40px;
    }
    h1{
        font-size:50px;
        font-family:'PTSerif-Italic';
        letter-spacing: 3px;
        
    }
    h2{
        font-size:34px;
        margin-top:150px;
        font-family:'PTSerif-BoldItalic';
        letter-spacing: 1.3px;
    }
    p{
        font-size:25px;
        font-family:'PTSerif-Regular';
        letter-spacing: 1.3px;
    }
`

export const RedSpot = styled.div`
    color:red;
    position:absolute;
    z-index:20;
    p{
        font-size:90px;
        position:relative;
        z-index:20;
        padding-top:0;
    }

`
export const Spread = styled.div`
    position:absolute;
    z-index:21;
    margin-top:55px;
`