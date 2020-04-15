import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentsDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    //Variavel Appointment : Modelo da variavel
    private appointments: Appointment[];

    constructor() {
        //Defino que essa variavel é um objeto nulo
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );

        return findAppointment || null;
    }

    public create({ provider, date }: CreateAppointmentsDTO): Appointment {
        // constante appoint é um novo modelo de Appointment
        const appointment = new Appointment({ provider, date });

        //adiciono appointment na variavel privada
        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;
