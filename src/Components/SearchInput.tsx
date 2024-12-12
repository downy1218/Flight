import * as S from '../Styles/MainStyle';

interface SearchInputProps {
    placeholder:string;
    onClick:()=>void;
}


function SearchInput({placeholder , onClick}:SearchInputProps):JSX.Element{


    return(
        <S.InputWrapper>
            <S.SearchBar type='text' placeholder={placeholder}></S.SearchBar>
            <button onClick={onClick}>검색</button>
        </S.InputWrapper>
    )
}

export default SearchInput;
//특정 비행기만 추적하고 싶다면 항공평 번호를(callsign) 사용하여 필터링