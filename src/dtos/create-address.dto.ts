import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsPostalCode,
    IsNumber,
    Min,
    Max,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    street: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    city: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    state: string;

    @IsOptional()
    @IsPostalCode('any', { message: 'Invalid postal code' })
    @Transform(({ value }) => value?.trim())
    postalCode?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => value?.trim())
    country?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => value?.trim())
    references?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({}, { message: 'Latitude must be a number' })
    @Min(-90)
    @Max(90)
    latitude?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({}, { message: 'Longitude must be a number' })
    @Min(-180)
    @Max(180)
    longitude?: number;
}