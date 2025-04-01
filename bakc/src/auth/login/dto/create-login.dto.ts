import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateLoginDto {
    @IsNotEmpty({message:"Usuario es requerido"})
    @IsEmail()
    email: string 
   @IsString()
    @IsNotEmpty({message:"constaseña es requerida"})
    pass: string

}
