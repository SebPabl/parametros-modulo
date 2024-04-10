import { MonthlySalary } from "src/monthly-salary/entities/monthly-salary.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class YearsParameter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    minimumYears: number;

    @Column()
    maximumYears: number;

    @Column()
    points: number;

    @OneToMany(() => MonthlySalary, (monthlySalary) => monthlySalary.yearsParameter)
    monthlySalary: MonthlySalary[];
}