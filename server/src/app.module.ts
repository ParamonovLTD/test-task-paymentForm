import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user1:123@cluster0.16zg3.mongodb.net/testovoeDB?retryWrites=true&w=majority',
    ),
    PaymentModule
  ],
})
export class AppModule {}
