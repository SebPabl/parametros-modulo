import { IsAlpha, MaxLength } from "class-validator";

export class CreateStaffDto {
    @IsAlpha()
    @MaxLength(100)
    name: string;

    @IsAlpha()
    @MaxLength(100)
    lastName: string;
}