import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
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

export const HeaderControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SaveButton = styled.button`
  width: 112px;
  height: 36px;
  background: #ee4d64;
  border: none;
  border-radius: 4px;
  margin-left: 15px;
  color: #fff;
  font-weight: bold;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 36px;
  background: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`;
