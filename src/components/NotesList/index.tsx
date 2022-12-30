import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export interface TextProps {
  id: string
  text: String
}

export const NotesList: React.FC = () => {
  const [text, setText] = useState<TextProps[]>([]);

  useEffect(() => {
    api.get("text").then((data) => {
      setText(data.data.texts)
    })
  }, []);
  return (
    <Container>
      {text.map(texto => (
        <li key={texto.id}>{texto.text}</li>
      ))}
    </Container>
  )
}
