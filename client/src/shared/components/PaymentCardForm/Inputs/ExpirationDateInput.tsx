import React from 'react';
import valid from 'card-validator';
import { FormCleaveInput } from '../styles';
import { Form } from 'antd';

const ExpirationDateInput: React.FC = () => {
  return (
    <Form.Item
      name="expDate"
      validateTrigger={['onSubmit', 'onChange']}
      rules={[
        {
          required: true,
          message: ''
        },
        () => ({
          validateTrigger: 'onChange',
          validator(_, expirationDate: string) {
            const expirationDateValidation = valid.expirationDate(expirationDate)

            if (expirationDateValidation.isPotentiallyValid || !expirationDate) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Неправильный формат даты'));
          },
        }),
        () => ({
          validateTrigger: 'onSubmit',
          validator(_, expirationDate: string) {
            const expirationDateValidation = valid.expirationDate(expirationDate)

            if (!expirationDate) {
              return Promise.reject(new Error('Пожалуйста, введите срок карты!'));
            }

            if (expirationDateValidation.isValid || !expirationDateValidation.isPotentiallyValid) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('Неправильный формат даты!'));
          },
        }),
      ]}
    >
      <FormCleaveInput
        placeholder="Expiration date"
        options={{ date: true, datePattern: ['m', 'Y'] }}
      />
    </Form.Item>
  );
};

export default ExpirationDateInput;