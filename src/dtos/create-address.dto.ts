import { IsUUID, IsString, IsNumber, IsOptional, IsEnum, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export enum AddressType {
    HOME = 'HOME',
    WORK = 'WORK',
    OTHER = 'OTHER',
}

export class CreateAddressDto {
    @IsUUID()
    userId: string;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    addressDetails?: string;

    @IsOptional()
    @IsString()
    references?: string;

    @IsOptional()
    @IsEnum(AddressType)
    type?: AddressType = AddressType.HOME;

    @IsString()
    country: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsOptional()
    @IsString()
    postalCode?: string;

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsOptional()
    @IsBoolean()
    isDefault?: boolean = false;
}
