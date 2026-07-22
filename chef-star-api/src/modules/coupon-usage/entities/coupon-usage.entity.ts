import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Order } from '../../order/entities/order.entity';
import { Coupon } from '../../coupon/entities/coupon.entity';

@Entity()
export class CouponUsage {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.couponUsage)
  user!: User;

  @ManyToOne(() => Order, (order) => order.couponUsage)
  order!: Order;

  @ManyToOne(() => Coupon, (coupon) => coupon.couponUsage, { nullable: true })
  coupon!: Coupon;

  @Column('timestamptz')
  usedAt!: Date;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt!: Date;
}
