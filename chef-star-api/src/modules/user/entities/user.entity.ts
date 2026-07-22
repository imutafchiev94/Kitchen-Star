import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { Address } from '../../address/entities/address.entity';
import AuditLog from '../../audit-logs/entities/audit-logs.entity';
import { CouponUsage } from '../../coupon-usage/entities/coupon-usage.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { unique: true, length: 25 })
  username!: string;

  @Column('varchar', { length: 255 })
  password!: string;

  @Column('varchar', { length: 255 })
  email!: string;

  @OneToMany(() => CouponUsage, (couponUsage) => couponUsage.user)
  couponUsage!: CouponUsage[];

  @OneToMany(() => Order, (order) => order.user)
  orders!: Order[];

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles!: UserRole[];

  @OneToMany(() => Address, (address) => address.user)
  addresses!: Address[];

  @OneToMany(() => AuditLog, (auditlogs) => auditlogs.user)
  auditLogs!: AuditLog[];

  @Column('varchar', { length: 25, nullable: true })
  phoneNumber?: string;

  @Column('varchar', { length: 255, nullable: true })
  firstName?: string;

  @Column('varchar', { length: 255, nullable: true })
  lastName?: string;

  @Column('date', { nullable: true })
  dateOfBirth?: Date;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt?: Date;
}
