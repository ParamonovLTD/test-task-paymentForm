import React from 'react';
import valid from 'card-validator';
import { FormCleaveInput } from '../styles';
import { Form } from 'antd';

const CardNumberInput: React.FC = () => {
  const validateNumber = (cardNumber: string) => {
    const numberWithoutSpaces = cardNumber.split(' ').join('')
    return valid.number(numberWithoutSpaces)
  }

  return (
    <Form.Item
      name="cardNumber"
      validateTrigger={['onSubmit', 'onChange']}
      rules={[
        {
          required: true,
          message: ''
        },
        () => ({
          validateTrigger: 'onChange',
          validator(_, cardNumber: string = '') {
            const numberValidation = validateNumber(cardNumber)

            if (numberValidation.isPotentiallyValid || !cardNumber) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Неправильный номер карты'));
          },
        }),
        () => ({
          validateTrigger: 'onSubmit',
          validator(_, cardNumber: string = '') {
            const numberValidation = validateNumber(cardNumber)

            if (numberValidation.isValid) {
              return Promise.resolve();
            }
            if (!cardNumber) {
              return Promise.reject(new Error('Пожалуйста, введите номер карты!'));
            }
            return Promise.reject(new Error('Неправильный номер карты!'));
          },
        }),
      ]}
    >
      <FormCleaveInput
        placeholder="Card number"
        options={{creditCard: true}}
      />
    </Form.Item>
  );
};

export default CardNumberInput;