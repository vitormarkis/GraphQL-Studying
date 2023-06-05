import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field(() => String)
  customerId: string;

  @Field(() => Date)
  startsWith: Date;

  @Field(() => Date)
  endsAt: Date;
}
