import React, {useState, useEffect} from 'react';
import { api } from '../../services/api';
import { Container, Form } from './styles';

export const Main: React.FC = () => {
  const [text, setText] = useState("")

  const createNote = async ()=> {
    await api.post("/text", {
        text
    });

  }

  return (
    <Container>
        <Form>
            <h1>
             create note here!!
            </h1>
            <textarea onChange={e =>{ setText(e.target.value)}} placeholder='field for notes' />
            <button onClick={()=>createNote()}>
                create
            </button>
        </Form>
    </Container>
  )
}
