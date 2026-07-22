import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';
import { CouponUsageModule } from './modules/coupon-usage/coupon-usage.module';
import { RoleModule } from './modules/role/role.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderItemModule } from './modules/order-item/order-item.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { ProductImageModule } from './modules/product-image/product-image.module';
import { AddressModule } from './modules/address/address.module';
import { PaymentModule } from './modules/payment/payment.module';
import { AuditlogsModule } from './modules/audit-logs/audit-logs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    OrderModule,
    CouponUsageModule,
    RoleModule,
    ProductModule,
    CategoryModule,
    OrderItemModule,
    CouponModule,
    PromotionModule,
    ProductImageModule,
    AddressModule,
    PaymentModule,
    AuditlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
