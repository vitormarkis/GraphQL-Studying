import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Appointment {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;
}
