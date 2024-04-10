import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DegreeType } from "../enum/degree-type.enum";
import { Staff } from "src/staff/entities/staff.entity";

@Entity()
export class CV {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Staff)
    @JoinColumn({ name:'idStaff', referencedColumnName: 'id'})
    staff: Staff;

    @Column()
    idStaff: number;

    @Column({ type: 'string' })
    degreeType: DegreeType;

    @Column()
    yearsExperience: number;
}