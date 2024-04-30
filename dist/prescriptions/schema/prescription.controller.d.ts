import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription.schema';
import { CreatePrescriptionDto } from '../Dto/Create-prescription.dto';
import { UpdatePresciptionDto } from '../Dto/Update-prescription.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class PrescriptionContoller {
    private prescriptionservices;
    constructor(prescriptionservices: PrescriptionService);
    GetAllPrescription(query: ExpressQuery): Promise<Prescription[]>;
    CreatePresciption(createnursingdto: CreatePrescriptionDto): Promise<Prescription>;
    GetPrescription(id: string): Promise<Prescription>;
    updateRestaurant(id: string, updateprescription: UpdatePresciptionDto): Promise<Prescription>;
    DeletePrescription(id: string): Promise<{
        deleted: boolean;
    }>;
}
