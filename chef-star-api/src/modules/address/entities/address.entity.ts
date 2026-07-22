import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255 })
  city!: string;

  @Column('varchar', { length: 255 })
  street!: string;

  @Column('varchar', { length: 255 })
  state!: string;

  @Column('varchar', { length: 255 })
  country!: string;

  @ManyToOne(() => User, (user) => user.addresses)
  user!: User;

  @OneToMany(
    () => Order,
    (orderShippingAddress) => orderShippingAddress.shippingAddress,
  )
  shippingOrders!: Order[];

  @OneToMany(
    () => Order,
    (orderBillingAddress) => orderBillingAddress.billingAddress,
  )
  billingOrders!: Order[];

  @Column('varchar', { length: 255 })
  postalCode!: string;

  @Column('varchar', { length: 255 })
  formatAddress!: string;

  @Column('decimal', { precision: 10, scale: 6 })
  latitude!: number;

  @Column('decimal', { precision: 10, scale: 6 })
  longitude!: number;

  @Column('varchar', { length: 255, nullable: true })
  placeId?: string;

  @Column('boolean', { default: false })
  isDefaultShippingAddress: boolean = false;

  @Column('boolean', { default: false })
  isDefaultBillingAddress: boolean = false;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt!: Date;
}
