export declare enum AddressType {
    HOME = "HOME",
    WORK = "WORK",
    OTHER = "OTHER"
}
export declare class CreateAddressDto {
    userId: string;
    latitude: number;
    longitude: number;
    address: string;
    addressDetails?: string;
    references?: string;
    type?: AddressType;
    country: string;
    city: string;
    state: string;
    postalCode?: string;
    imageUrl?: string;
    isDefault?: boolean;
    isDeleted?: boolean;
}
