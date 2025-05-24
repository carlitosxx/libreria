import { Transform, Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
    @Transform(({ value }) => (!!value ? Number(value) : undefined))
    @IsOptional()
    @Type(() => Number)
    @IsPositive()
    @Min(1)
    page?: number = 1;

    @Transform(({ value }) => (!!value ? Number(value) : undefined))
    @IsOptional()
    @Type(() => Number)
    @IsPositive()
    @Min(1)
    limit?: number = 10;
}
