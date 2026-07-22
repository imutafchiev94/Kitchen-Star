import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from '../modules/address/entities/address.entity';
import AuditLog from '../modules/audit-logs/entities/audit-logs.entity';
import { Category } from '../modules/category/entities/category.entity';
import { Coupon } from '../modules/coupon/entities/coupon.entity';
import { CouponUsage } from '../modules/coupon-usage/entities/coupon-usage.entity';
import { OrderItem } from '../modules/order-item/entities/order-item.entity';
import { Order } from '../modules/order/entities/order.entity';
import { OrderPromotion } from '../modules/order-promotion/entities/order-promotion.entity';
import { Payment } from '../modules/payment/entities/payment.entity';
import { Product } from '../modules/product/entities/product.entity';
import { ProductImage } from '../modules/product-image/entities/product-image.entity';
import { Promotion } from '../modules/promotion/entities/promotion.entity';
import { Role } from '../modules/role/entities/role.entity';
import { User } from '../modules/user/entities/user.entity';
import { UserRole } from '../modules/user-role/entities/user-role.entity';

export default registerAs('database', (): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: process.env.POSTGRESS_URL,
  entities: [
    Address,
    AuditLog,
    Category,
    Coupon,
    CouponUsage,
    OrderItem,
    Order,
    OrderPromotion,
    Payment,
    Product,
    ProductImage,
    Promotion,
    Role,
    User,
    UserRole,
  ],
}));
