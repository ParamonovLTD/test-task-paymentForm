import React from 'react';
import { Form } from 'antd';
import { FormCleaveInput } from '../styles';

const AmountInput: React.FC = () => {
  return (
    <Form.Item
      name="amount"
      rules={[
        {
          required: true,
          message: 'Пожалуйста, введите сумму перевода!'
        }
      ]}
    >
      <FormCleaveInput
        placeholder="Amount"
        options={{ numeral: true, numeralThousandsGroupStyle: 'thousand', delimiter: ' ' }}
        maxLength={11}
      />
    </Form.Item>
  );
};

export default AmountInput;