import styled from 'styled-components';
import Cleave from 'cleave.js/react';
import { Button, Form } from 'antd';

export const FormCleaveInput = styled(Cleave)`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgray;
  transition: 0.2s;
  outline: none;

  &:hover {
    border-color: #768093;
  }

  &:focus {
    border-color: #768093;
    box-shadow: 0 0 0 2px rgba(101 133 154 / 20%);
  }
`;

export const SubmitButtonItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;
