import { CreateAddressDto } from './create-address.dto';
declare const UpdateAddressDto_base: import("@nestjs/mapped-types").MappedType<Omit<Partial<CreateAddressDto>, "userId">>;
export declare class UpdateAddressDto extends UpdateAddressDto_base {
}
export {};
