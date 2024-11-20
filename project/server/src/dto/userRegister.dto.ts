import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from "class-validator";

 interface Geo {
  lat: string;
  lng: string;
}

 interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

 interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class userRegister {
  @IsNotEmpty()
  public name: string;
  @IsNotEmpty()
  public username: string;
  @IsNotEmpty()
  public password: string;
  @IsNotEmpty()
  public email: string;
  @IsNotEmpty()
  public phone: string;
  @IsNotEmpty()
  public website: string;
  @IsOptional()
  @ValidateNested()
  public company?: Company;
  @IsOptional()
  @ValidateNested()
  public address?: Address;
}

