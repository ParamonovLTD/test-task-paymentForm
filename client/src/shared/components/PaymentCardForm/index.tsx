import React, { memo } from 'react';
import { Col, Form, Row } from 'antd';
import { PaymentFormValues, PaymentValues } from '../../../types/payment';
import { SubmitButton, SubmitButtonItem } from './styles';
import CardNumberInput from './Inputs/CardNumberInput';
import ExpirationDateInput from './Inputs/ExpirationDateInput';
import CvvInput from './Inputs/CvvInput';
import AmountInput from './Inputs/AmountInput';

interface PaymentCardFormProps {
  onSubmit: (values: PaymentFormValues) => void;
}

const PaymentCardForm: React.FC<PaymentCardFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      name="payment"
      onFinish={() => {
        form
          .validateFields()
          .then((values: PaymentValues) => {
            const formattedNumber = values.cardNumber.split(' ').join('')
            const formattedAmount = parseInt(values.amount.split(' ').join(''))
            form.resetFields();
            onSubmit({ ...values, cardNumber: formattedNumber, amount: formattedAmount });
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <CardNumberInput />

      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 11 }}>
          <ExpirationDateInput />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 11, offset: 2 }}>
          <CvvInput />
        </Col>
      </Row>

      <AmountInput />

      <SubmitButtonItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 12, offset: 6 }, lg: { span: 8, offset: 8 }}}>
        <SubmitButton type="primary" htmlType="submit">
          Войти
        </SubmitButton>
      </SubmitButtonItem>
    </Form>
  );
};

export default memo(PaymentCardForm);