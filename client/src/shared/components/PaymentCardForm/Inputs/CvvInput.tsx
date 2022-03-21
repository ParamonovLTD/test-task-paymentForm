import React from 'react';
import valid from 'card-validator';
import { FormCleaveInput } from '../styles';
import { Form } from 'antd';

const CvvInput: React.FC = () => {
  return (
    <Form.Item
      name="cvv"
      validateTrigger={['onSubmit', 'onChange']}
      rules={[
        {
          required: true,
          message: ''
        },
        () => ({
          validateTrigger: 'onChange',
          validator(_, cvvCode: string) {
            const cvvValidation = valid.cvv(cvvCode)

            if (cvvValidation.isPotentiallyValid || !cvvCode) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Неправильный CVV код'));
          },
        }),
        () => ({
          validateTrigger: 'onSubmit',
          validator(_, cvvCode: string) {
            const cvvValidation = valid.cvv(cvvCode)

            if (cvvValidation.isValid) {
              return Promise.resolve();
            }
            if (!cvvCode) {
              return Promise.reject(new Error('Пожалуйста, введите CVV код!'));
            }
            return Promise.reject(new Error('Неправильный CVV код!'));
          },
        }),
      ]}
    >
      <FormCleaveInput
        placeholder="CVV"
        options={{ numericOnly: true }}
        maxLength={3}
      />
    </Form.Item>
  );
};

export default CvvInput;