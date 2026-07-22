import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Promotion } from '../../promotion/entities/promotion.entity';
import { ProductImage } from '../../product-image/entities/product-image.entity';
import { OrderItem } from '../../order-item/entities/order-item.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255 })
  name!: string;

  @Column('text')
  description!: string;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  price!: number;

  @Column('integer')
  stock!: number;

  @Column('varchar', { length: 255 })
  sku!: string;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Promotion, (promotion) => promotion.products)
  promotion?: Promotion;

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  productImages!: ProductImage[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems!: OrderItem[];
}
