import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { User } from 'src/user/entities/user.entity';
import { Permission } from 'src/permission/entities/permission.entity';
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  // @OneToMany(() => User, (user) => user.role)
  // users: User[];

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
