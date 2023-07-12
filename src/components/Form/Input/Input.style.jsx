import { styled } from "styled-components"

export const InputGroup = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 8px;
width: 100%;
`;
export const Label = styled.label`
color: #5281DC;
font-family: Segoe UI;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #5281DC;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const Input = styled.input`
display: flex;
padding: 8px;
align-items: flex-start;
align-self: stretch;
border-radius: 5px;
border: 1px solid #5281DC;
width: 100%;
`;
export const TextArea = styled.textarea`
display: flex;
padding: 8px;
align-items: flex-start;
align-self: stretch;
border-radius: 5px;
border: 1px solid #5281DC;
`;
export const InputContainer = styled.div`
position: relative;
width: 100%;
`;

export const Icon = styled.button`
position: absolute;
top: .7rem;
right: .7rem;
cursor: pointer;
background: transparent;
border: 0;
display: flex;
align-items: center;
justify-content:center;
color: #5281dc;
`;