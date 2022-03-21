export class CreatePaymentDto {
  readonly id: string;
  readonly cardNumber: string;
  readonly expDate: string;
  readonly cvv: string;
  readonly amount: number;
}

export type CreatePaymentResponse = Pick<CreatePaymentDto, 'id' | 'amount'>