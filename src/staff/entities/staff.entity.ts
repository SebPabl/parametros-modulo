import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;
    
    @Column({ length: 100 })
    lastName: string;

    @Column({ default: true })
    active: boolean;
}