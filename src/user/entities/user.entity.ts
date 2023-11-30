import { Role } from 'src/role/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string; // Asegúrate de encriptar las contraseñas

  @Column()
  email: string;

  @Column()
  fullName: string;

  // @ManyToOne(() => Role, (role) => role.users)
  // role: Role;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  phoneNumber: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Aquí puedes agregar campos adicionales según las necesidades de tu sistema
  // Por ejemplo, si los usuarios tienen permisos específicos, dirección, etc.
}
