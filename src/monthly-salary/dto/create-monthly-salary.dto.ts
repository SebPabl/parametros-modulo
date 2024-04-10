import { IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export class CreateMonthlySalaryDto {
    @IsNotEmpty()
    @IsDecimal()
    hourSalary: number;

    @IsInt()
    @IsNotEmpty()
    degreeCategoryId: number;

    @IsInt()
    @IsNotEmpty()
    yearParameterId: number;

    @IsInt()
    @IsNotEmpty()
    staffId: number;
}