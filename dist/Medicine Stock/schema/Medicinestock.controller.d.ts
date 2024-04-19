import { MedicineStockService } from './Medicinestock.service';
import { MedicineStock } from './Medicinestock.schema';
import { CreateMedicineStockDto } from '../Dto/CreateMedicineStock';
import { UpdateMedicineStockDto } from '../Dto/UpdateMedicineStock';
export declare class MedicineStockController {
    private medicinesstockservice;
    constructor(medicinesstockservice: MedicineStockService);
    GetAllMedicineStock(): Promise<MedicineStock[]>;
    CreateMedicineStock(createMedicineStockDto: CreateMedicineStockDto): Promise<MedicineStock>;
    getmedicnestock(id: string): Promise<MedicineStock>;
    updateMedicineStock(id: string, updateMedicineStockDto: UpdateMedicineStockDto): Promise<MedicineStock>;
    deleteRestaurant(id: string): Promise<{
        deleted: boolean;
    }>;
}
