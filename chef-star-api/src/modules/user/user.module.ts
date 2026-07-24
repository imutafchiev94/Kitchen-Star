import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuditLog } from '../audit-logs/entities/audit-logs.entity';
import { Order } from '../order/entities/order.entity';
import { UserRole } from '../user-role/entities/user-role.entity';
import { CouponUsage } from '../coupon-usage/entities/coupon-usage.entity';
import { Address } from '../address/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      AuditLog,
      Order,
      UserRole,
      CouponUsage,
      Address,
    ]),
  ],
  providers: [UserService],
})
export class UserModule {}
