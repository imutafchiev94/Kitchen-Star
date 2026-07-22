import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Promotion } from '../../promotion/entities/promotion.entity';

@Entity()
export class OrderPromotion {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Order, (order) => order.orderPromotions)
  order!: Order;

  @ManyToOne(() => Promotion, (promotion) => promotion.orderPromotions)
  promotion!: Promotion;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt!: Date;
}
