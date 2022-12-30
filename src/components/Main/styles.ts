import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;
    textarea {
        width: 100%;
        resize: vertical;
        padding: 5px;
        border-radius: 4px;
        border-color: #30363d;
        background-color: #161b22;
        color: #fff;
        outline: 0;
    }
    button{
        width: 100%;
        height: 30px;
        border-radius: 4px;
        background: #21262d;
        color: #fff;
        border-color: rgb(240,246,252,0.1);
        cursor: pointer;
        transition: .4s;
        opacity: 0.8;
        &:hover{
            opacity: 1;
        }
    }
`
