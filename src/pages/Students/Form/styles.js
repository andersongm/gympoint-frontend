import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    height: 85%;
    margin: 0 auto;
    /* height: 100px; */

    form {
        height: 300px;
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

export const DataStudent = styled.div`
    
    div {
        display: flex;
        flex-direction: column;
        width: 32%;
    }
`;
