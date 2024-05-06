import { MedicineAllotmentService } from './MedicineAllotment.service';
import { MedicineAllotment } from './MedicineAllotment.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { CreateMedicineAllotmentDto } from '../dto/CreateMedicineAllotmentDTO';
import { UpdateMedicineAllotmentDto } from '../dto/UpdateMedicineAllotmentDto';
export declare class MedicineAllotmentController {
    private medicineallotmentservice;
    constructor(medicineallotmentservice: MedicineAllotmentService);
    GetAllMedicineAllotment(query: ExpressQuery): Promise<MedicineAllotment[]>;
    CreateMedicineAllotment(createmedicineallotmentdto: CreateMedicineAllotmentDto): Promise<CreateMedicineAllotmentDto>;
    GetMedicineAlloment(id: string): Promise<MedicineAllotment>;
    UpdateMedicineAllotment(id: string, updatemedicineallotmentdto: UpdateMedicineAllotmentDto): Promise<UpdateMedicineAllotmentDto>;
    DeletePrescription(id: string): Promise<{
        deleted: boolean;
    }>;
}
