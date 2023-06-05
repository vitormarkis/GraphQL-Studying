import { CreateAppointmentInput } from "@/dtos/inputs/create-appointment-input";
import { Appointment } from "@/dtos/models/appointment-model";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

const db_Appointments = [] as Appointment[];

@Resolver()
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async getAppointments() {
    return db_Appointments;
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const newAppointment: Appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    db_Appointments.push(newAppointment);

    return newAppointment;
  }
}
