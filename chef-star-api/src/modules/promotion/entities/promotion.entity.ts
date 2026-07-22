import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { TypeOfDiscount } from '../../../common/enums/type-of-discount';
import { OrderPromotion } from '../../order-promotion/entities/order-promotion.entity';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255 })
  name!: string;

  @Column('date')
  startDate!: Date;

  @Column('date')
  endDate!: Date;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  discount!: number;

  @Column({
    type: 'enum',
    enum: TypeOfDiscount,
    default: TypeOfDiscount.PERCENTAGE,
  })
  typeOfDiscount!: TypeOfDiscount;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Product, (product) => product.promotion)
  products!: Product[];

  @OneToMany(() => OrderPromotion, (orderPromotion) => orderPromotion.promotion)
  orderPromotions!: OrderPromotion[];
}
