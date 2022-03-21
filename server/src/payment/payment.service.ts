import { Injectable } from '@nestjs/common';
import { CreatePaymentDto, CreatePaymentResponse } from './dto/create-payment.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './schemas/payment.schema';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>) {}

  async createPayment(dto: CreatePaymentDto): Promise<CreatePaymentResponse> {
    const payment = await this.paymentModel.create(dto)
    return { id: payment.id, amount: payment.amount }
  }
}
