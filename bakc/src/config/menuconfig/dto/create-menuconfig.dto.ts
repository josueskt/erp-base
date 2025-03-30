import { IsString, IsArray, ValidateNested, IsOptional, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class SubRouteDto {
    @IsOptional()
    id_route:string
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    direction: string;
    @IsNotEmpty()
    @IsString()
    icon: string;
}

export class CreateMenuconfigDto {
    @IsOptional()
    id_route:string
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    direction: string;
    @IsNotEmpty()
    @IsString()
    icon: string;
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SubRouteDto)
    subMenu: SubRouteDto[];
    @IsOptional()
    fk_route:string
}
