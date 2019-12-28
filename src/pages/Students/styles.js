import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width: 1000px;
    height: 85%;
    margin: 0 auto;
    
`;

export const AddButton = styled(Link)`
  width: 112px;
  height: 36px;
  background: #ee4d64;
  border: none;
  border-radius: 4px;
  /* margin-left: 15px; */
  color: #fff;
  font-weight: bold;
  padding: 5px;
  display: flex;
  align-items: center;

  svg {
      margin-right: 5px;
  }

`;

export const StudentsHeader = styled.div`
    display: flex;
    justify-content: space-between;   
    height: 64px;
    align-items: center;
    padding-left: 10px;
   

    strong {
        font-size: 16px;
        font-weight: normal;
    }

`;
export const SudentsHeaderControl = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    
    input {
        border-radius: 4px;
        padding: 2px;
        font-size: 16px;
        height: 36px;
        width: 70%;
    }


`;


export const TableList = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  /* border-collapse: collapse;  */
  padding: 30px 30px;
  font-size: 16px;
  color: #666;

  thead {
    text-align: left;
    
    tr {
        display: flex;
        
        th {
            width: 30%;
            padding: 10px;
        }
        
    }
    
  }
  
  tbody {
    
    tr {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #eee;

        td {
            width: 30%;
            padding: 10px;

            &:nth-child(4) {
                color: blue;
                text-align: right;
            }

            &:nth-child(5) {
                color: red;
                text-align: right;
            }

        }

    }
  }
  
`;