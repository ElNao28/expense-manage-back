import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'history' })
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'decimal',
  })
  amount: number;
  @Column({
    name: 'movement_date',
  })
  movementDate: Date;
}
