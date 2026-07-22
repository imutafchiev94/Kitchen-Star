import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export default class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.auditLogs)
  user!: User;

  @Column('varchar', { length: 255 })
  action!: string;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt!: Date;
}
