import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProfileDto {
    @IsString()
    @IsNotEmpty({message:"nombre es requerido"})
    @MaxLength(50, { message: 'nombre no debe tener más de 50 caracteres' })
    name:string
}
