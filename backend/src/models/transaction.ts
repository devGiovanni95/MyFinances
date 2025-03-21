import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Card from "./card";

@Entity()
export default class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ type: 'real' }) // Use 'real' for Float in SQLite
    amount!: number;

    @Column({ type: 'datetime' })
    date!: Date;

    @Column()
    monthly!: boolean;

    @Column({default: false})
    paid?: boolean;

    @Column({ nullable: true })
    description?: string;

    @ManyToOne(() => Card, (card) => card.transactions)
    card?: Card;
}