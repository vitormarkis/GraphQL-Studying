import { CreateAppointmentInput } from "@/dtos/inputs/create-appointment-input";
import { Appointment } from "@/dtos/models/appointment-model";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async getAppointments() {
    return "Hello World";
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const newAppointment: Appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return newAppointment;
  }
}
