import { CreateAppointmentInput } from "@/dtos/inputs/create-appointment-input";
import { Appointment } from "@/dtos/models/appointment-model";
import { Customer } from "@/dtos/models/customer-model";
import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { randomUUID } from "node:crypto";

const db_Appointments = [] as Appointment[];

@Resolver(() => Appointment)
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
      id: randomUUID(),
    };

    db_Appointments.push(newAppointment);

    return newAppointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: "Vitor Markis",
      id: appointment.id,
    };
  }
}
