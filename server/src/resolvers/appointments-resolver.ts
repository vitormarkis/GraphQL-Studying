import { CreateAppointmentInput } from "@/dtos/inputs/create-appointment-input";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async getAppointments() {
    return "Hello World";
  }

  @Mutation(() => Boolean)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput
  ): Promise<boolean> {
    return true;
  }
}
