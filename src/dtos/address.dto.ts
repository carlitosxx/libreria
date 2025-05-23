import { IsDate, IsUUID } from "class-validator";
import { CreateAddressDto } from "./create-address.dto";
import { Type } from "class-transformer";

export class AddressDto extends CreateAddressDto {
    @IsUUID()
    id: string;

    @IsDate()
    @Type(() => Date)
    createdAt: Date;

    @IsDate()
    @Type(() => Date)
    updatedAt: Date;
}
