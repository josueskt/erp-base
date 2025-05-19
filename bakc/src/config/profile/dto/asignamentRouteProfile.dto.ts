import { IsArray, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class AsignamentProfileDto {
    @IsString()
    @IsNotEmpty({ message: "perfil es requerido" })
    ida: string
    @IsArray()
    @IsNotEmpty()
    Routs: []
}
