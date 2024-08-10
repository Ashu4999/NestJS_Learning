import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

// class-validator class-transformer - https://github.com/typestack/class-validator#validation-decorators

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ADMIN", "ENGINEER"], {
        message: "Valid role required"
    })
    role: "INTERN" | "ADMIN" | "ENGINEER"
}