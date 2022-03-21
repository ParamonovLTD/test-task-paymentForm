import React from 'react';
import PaymentCardForm from '../PaymentCardForm';
import { PaymentCardWrapper } from './styles';
import { useCreatePaymentMutation } from '../../../services/payment';
import { v4 as uuidv4 } from 'uuid';
import { IPaymentResponse, PaymentFormValues } from '../../../types/payment';
import { notification } from 'antd';

const PaymentCard: React.FC = () => {
  const [createPayment] = useCreatePaymentMutation()

  const onPaymentSubmit = (values: PaymentFormValues) => {
    createPayment({ id: uuidv4(), ...values }).unwrap()
      .then((data: IPaymentResponse) => notification.success({ message: `id: ${data.id}`, description: `amount: ${data.amount}`}))
      .catch(error => notification.error({ message: error }))
  }
  return (
    <PaymentCardWrapper title='Payment'>
      <PaymentCardForm onSubmit={onPaymentSubmit} />
    </PaymentCardWrapper>
  );
};

export default PaymentCard;