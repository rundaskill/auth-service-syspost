import { Role } from 'src/role/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string; // Ejemplo: 'CREATE_PRODUCT', 'VIEW_SALES'

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
