import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TypeOfDiscount } from '../../../common/enums/type-of-discount';
import { CouponUsage } from '../../coupon-usage/entities/coupon-usage.entity';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255 })
  name!: string;

  @Column('varchar', { length: 255, unique: true })
  code!: string;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  discount!: number;

  @Column('date')
  startDate!: Date;

  @Column('date')
  endDate!: Date;

  @OneToMany(() => CouponUsage, (couponUsage) => couponUsage.coupon)
  couponUsage!: CouponUsage[];

  @Column({
    type: 'enum',
    enum: TypeOfDiscount,
    default: TypeOfDiscount.PERCENTAGE,
  })
  typeOfDiscount!: TypeOfDiscount;

  @Column('date')
  createdAt: Date = new Date();

  @Column('date', { nullable: true })
  updatedAt?: Date;
}
