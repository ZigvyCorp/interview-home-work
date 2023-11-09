import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  address: {
    street: string;

    suite: string;

    city: string;

    zipcode: string;

    geo: {
      lat: string;

      lng: string;
    };
  };

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  website: string;

  company: {
    name: string;

    catchPhrase: string;

    bs: string;
  };
}
export const UserSchema = SchemaFactory.createForClass(User);

// export class Address {
//   @Prop({ required: true })
//   street: string;

//   @Prop({ required: true })
//   suite: string;

//   @Prop({ required: true })
//   city: string;

//   @Prop({ required: true })
//   zipcode: string;

//   @Prop({ required: true })
//   geo: geo;
// }

// export class geo {
//   @Prop({ required: true })
//   lat: string;

//   @Prop({ required: true })
//   lng: string;
// }

// export class company {
//   @Prop({ required: true })
//   name: string;

//   @Prop({ required: true })
//   catchPhrase: string;

//   @Prop({ required: true })
//   bs: string;
// }
