import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  background: #EE4D64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  
  label {
    text-align: left;
    margin-bottom: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: none;
      border: 1px solid #919191;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #EE4D64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, '#EE4D64')};
      }
    }

  }
`;
