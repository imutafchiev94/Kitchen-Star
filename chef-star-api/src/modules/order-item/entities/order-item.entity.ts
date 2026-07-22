import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order!: Order;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product!: Product;

  @Column('int')
  quantity!: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  price!: number;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt?: Date;
}
