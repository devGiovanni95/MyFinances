import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from './user';
import Transaction from "./transaction";

@Entity()
export default class Card extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    status!: string;

    @ManyToOne(() => User, (user) => user.cards)
    owner!: User;

    @OneToMany(() => Transaction, (transaction) => transaction.card)
    transactions!: Transaction[];
}