import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 90px;
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    gap: 30px;

    list-style-type: none;

    flex-wrap: wrap;

  li {

    width: 100%;
    max-width: 300px;
    padding: 15px;
        border-radius: 4px;
        border-color: rgb(240,246,252,0.1);
        color: #fff;
        background-color: #161b22;
        min-height: 150px;
  }
`;
