import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Card from "./card";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column({ nullable: true })
    name?: string;

    @OneToMany(() => Card, (card) => card.owner)
    cards!: Card[];
}