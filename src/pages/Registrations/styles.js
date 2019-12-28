import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    height: 85%;
    margin: 0 auto;

    form {
        height: 165px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px 20px;
        background: #FFF;

        label {
            align-items: center;
        }

        input {
            border-radius: 4px;
            padding: 5px;
            margin-top: 5px;
            /* background: #7159c1; */
            height: 45px;
            font-size: 16px;
        }
        
        div {
            display: flex;
            justify-content: space-between;
        }

    }
`;

export const DataRegistration = styled.div`

    div {
        display: flex;
        flex-direction: column;
        width: 22%;

        input#total {
            background: #eee;
        }
        
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
    /* font-size: 16px; */
    /* font-weight: bold; */
    
    tr {
        display: flex;
        /* padding: 15px 0; */

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

            &:nth-child(6) {
                color: blue;
                text-align: right;
            }

            &:nth-child(7) {
                color: red;
                text-align: right;
            }

        }

    }
  }
  
`;