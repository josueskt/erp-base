import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, minLength } from "class-validator"

export class CreateRegisterDto {
    @IsString()
    @IsNotEmpty()
name:string
@IsEmail()
@IsNotEmpty()
email:string
@IsString()
@IsStrongPassword({
    minLength: 8,       
minLowercase: 1,    
    minUppercase: 1,    
    minNumbers: 1,       
    minSymbols: 1},{message:' message: "La contraseña debe tener al menos 8 caracteres, incluyendo 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.'}
)
pass:string
fk_profile:string

}
