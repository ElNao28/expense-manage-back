import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'expenses' })
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column({
    name: 'purchase_date',
  })
  purchaseDate: Date;
  @Column({
    type:'decimal',
    nullable:true
  })
  amount: number;
}
