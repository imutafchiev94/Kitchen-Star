import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255 })
  url!: string;

  @Column('varchar', { length: 255, nullable: true })
  alt?: string;

  @Column('boolean', { default: false })
  isMain!: boolean;

  @Column('integer')
  sortOrder: number = 0;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Product, (product) => product.productImages)
  product!: Product;
}
