import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateLoginDto {
    @IsNotEmpty({message:"Usuario es requerido"})
    @IsString({message:"ola"})
    user: string 
   @IsString()
    @IsNotEmpty()
    password: string

}
