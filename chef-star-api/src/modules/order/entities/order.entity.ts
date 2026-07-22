import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { OrderItem } from '../../order-item/entities/order-item.entity';
import { Payment } from '../../payment/entities/payment.entity';
import { CouponUsage } from '../../coupon-usage/entities/coupon-usage.entity';
import { OrderPromotion } from '../../order-promotion/entities/order-promotion.entity';
import { OrderStatus } from '../../../common/enums/order-status';
import { Address } from '../../address/entities/address.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.orders)
  user!: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems!: OrderItem[];

  @OneToMany(() => Payment, (payment) => payment.order)
  payments!: Payment[];

  @OneToMany(() => CouponUsage, (couponUsage) => couponUsage.order)
  couponUsage!: CouponUsage[];

  @OneToMany(() => OrderPromotion, (orderPromotion) => orderPromotion.order)
  orderPromotions!: OrderPromotion[];

  @ManyToOne(() => Address, (shippingAddress) => shippingAddress.shippingOrders)
  shippingAddress!: Address;

  @ManyToOne(() => Address, (billingAddress) => billingAddress.billingOrders)
  billingAddress!: Address;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  totalPrice!: number;

  @Column('enum', { enum: OrderStatus, default: OrderStatus.PENDING })
  status!: OrderStatus;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt!: Date;
}
