import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription.schema';
import { CreatePrescriptionDto } from '../Dto/Create-prescription.dto';
import { UpdatePresciptionDto } from '../Dto/Update-prescription.dto';
export declare class PrescriptionContoller {
    private prescriptionservices;
    constructor(prescriptionservices: PrescriptionService);
    GetAllPrescription(): Promise<Prescription[]>;
    CreatePresciption(createnursingdto: CreatePrescriptionDto): Promise<Prescription>;
    GetPrescription(id: string): Promise<Prescription>;
    updateRestaurant(id: string, updateprescription: UpdatePresciptionDto): Promise<Prescription>;
    DeletePrescription(id: string): Promise<{
        deleted: boolean;
    }>;
}
