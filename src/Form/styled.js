import styled from "styled-components";

export const Fieldset = styled.fieldset`
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-radius: 20px;
`;

export const Label = styled.label`
    display: grid;
    grid-template-areas: "a b";
    align-items: center;
`;

export const Select = styled.select`
    padding: 5px;
    border-radius: 20px;

    &:hover {
        background-color: rgb(212, 182, 105);
    }
`;

export const Button = styled.button`
    padding: 5px;
    width: 100%;
    border-radius: 20px;
    background-color: goldenrod;
    color: white;

    &:hover {
        background-color: rgb(212, 182, 105);
    }

    &:active {
        background-color: rgb(211, 185, 118);
    }
`;

export const Paragraph = styled.p`
    text-align: center;
`;

export const ResultField = styled.p`
    display: grid;
    grid-template-areas: "a b";
    align-items: center;
`;

export const Result = styled.strong`
    grid-area: b;
    text-align: center;
    color: goldenrod;
`;

export const FormBody = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

export const Loading = styled.p`
    color: goldenrod;
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

export const Error = styled.p`
    color: red;
`;