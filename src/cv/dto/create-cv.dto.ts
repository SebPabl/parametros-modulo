import { IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { DegreeType } from "../enum/degree-type.enum";

export class CreateCVDto {
    @IsEnum(DegreeType)
    @IsNotEmpty()
    degreeType: DegreeType;

    @IsInt()
    @IsNotEmpty()
    yearsExperience: number;
}