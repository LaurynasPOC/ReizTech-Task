import styled from "styled-components";
import { tablet } from "../styles/breakpoints";

interface SelectProps {
  width?: number | string
}

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
    th,td:first-of-type{
        width: 50%;
    }
    th,td {
        width: 25%;
        text-align: left;
        padding: 5px 10px;
        border: 1px solid var(--lbg); 
        padding:15px 10px;
    }    
`

export const Select = styled.select<SelectProps>`
    background: var(--subbg);
    font-weight: 600;
    border: 1px solid var(--lbg);
    margin: 40px 0;
    height: 40px;
    border-radius: 2px;
    outline: none;
    color: white;
    padding: 0 10px;
    width: ${({ width }) => width || ''};
`

export const Container = styled.div`
margin: 40px auto;
max-width: 750px;
@media ${tablet} {
  margin: 40px 20px;
}
`