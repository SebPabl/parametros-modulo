import { DegreeType } from "src/cv/enum/degree-type.enum";
import { MonthlySalary } from "src/monthly-salary/entities/monthly-salary.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class DegreeCategory {
    @PrimaryColumn()
    id: number;

    @Column()
    degreeType: DegreeType;

    @Column()
    points: number;

    @OneToMany(() => MonthlySalary, (monthlySalary) => monthlySalary.degreeCategory)
    monthlySalary: MonthlySalary[]
}