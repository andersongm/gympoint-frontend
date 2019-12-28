import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    height: 85%;
    margin: 0 auto;
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
        /* padding: 15px 0; */

        th {
            width: 100%;
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
            width: 100%;
            padding: 10px;
            
            &:nth-child(2) {
                color: blue;
                text-align: right;
            }

        }

    }
  }
  
`;