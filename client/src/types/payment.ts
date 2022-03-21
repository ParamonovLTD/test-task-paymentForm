import { overrideAllPropertiesTypes } from './utils';

export interface IPayment {
  id: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  amount: number;
}

export type IPaymentRequest = IPayment
export type IPaymentResponse = Pick<IPayment, 'id' | 'amount'>

export type PaymentFormValues = Omit<IPayment, 'id'>

export type PaymentValues = overrideAllPropertiesTypes<PaymentFormValues, string>
