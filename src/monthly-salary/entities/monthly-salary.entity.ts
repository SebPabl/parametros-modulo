import { DegreeCategory } from "src/degree-category/entities/degree-category.entity";
import { Staff } from "src/staff/entities/staff.entity";
import { YearsParameter } from "src/years-parameters/entities/years-parameters.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MonthlySalary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    hourSalary: number;

    @ManyToOne(() => DegreeCategory)
    @JoinColumn({ name: "degreeCategoryId", referencedColumnName: "id" })
    degreeCategory: DegreeCategory;

    @Column()
    degreeCategoryId: number;

    @ManyToOne(() => YearsParameter)
    @JoinColumn({ name: "yearParameterId", referencedColumnName: "id" })
    yearsParameter: YearsParameter;

    @Column()
    yearParameterId: number;

    @OneToOne(() => Staff)
    @JoinColumn({ name: "staffId", referencedColumnName: "id" })
    staff: Staff;

    @Column()
    staffId: number;
}