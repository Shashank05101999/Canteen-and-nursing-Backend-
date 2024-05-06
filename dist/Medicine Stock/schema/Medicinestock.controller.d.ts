import { MedicineStockService } from './Medicinestock.service';
import { MedicineStock } from './Medicinestock.schema';
import { CreateMedicineStockDto } from '../Dto/CreateMedicineStock';
import { UpdateMedicineStockDto } from '../Dto/UpdateMedicineStock';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class MedicineStockController {
    private medicinesstockservice;
    constructor(medicinesstockservice: MedicineStockService);
    GetAllMedicineStock(query: ExpressQuery): Promise<MedicineStock[]>;
    CreateMedicineStock(createMedicineStockDto: CreateMedicineStockDto): Promise<MedicineStock>;
    getmedicnestock(id: string): Promise<MedicineStock>;
    updateMedicineStock(id: string, updateMedicineStockDto: UpdateMedicineStockDto): Promise<MedicineStock>;
    deleteMedicineStock(id: string): Promise<{
        deleted: boolean;
    }>;
}
