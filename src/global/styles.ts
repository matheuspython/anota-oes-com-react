import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
    --link: #5d80d6;
    --rocketseat: #6633cc;
  }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html,body {
        font-family: sans-serif;
    }
    body {
        background-color: #0d1117;
        color: #fff;
    }
    ::-webkit-scrollbar {
   width: 8px;
 }
 ::-webkit-scrollbar-thumb {
   background-color: var(--tertiary);
   border-radius: 4px;
 }
 ::-webkit-scrollbar-track {
   background-color: var(--secondary);
 }
`