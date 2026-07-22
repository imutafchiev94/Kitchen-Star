import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.userRoles)
  user!: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  role!: Role;

  @Column('timestamptz')
  createdAt: Date = new Date();

  @Column('timestamptz', { nullable: true })
  updatedAt!: Date;
}
