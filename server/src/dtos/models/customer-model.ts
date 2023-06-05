import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
  @Field(() => String)
  name: string;

  @Field(() => ID)
  id: string;
}
