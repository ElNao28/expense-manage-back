import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cash' })
export class Cash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
}
