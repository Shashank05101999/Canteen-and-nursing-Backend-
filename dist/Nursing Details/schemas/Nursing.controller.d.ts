import { NursingService } from './Nursing.service';
import { Nursing } from './Nursing.schema';
import { CreateNursingDto } from '../Dto/Create-Nursing.dto';
import { UpdateNursingDto } from '../Dto/Update-nursing.dto';
export declare class NursingController {
    private nursingservices;
    constructor(nursingservices: NursingService);
    getAllNursing(): Promise<Nursing[]>;
    createRestaurant(createnursingdto: CreateNursingDto): Promise<Nursing>;
    getRestaurant(id: string): Promise<Nursing>;
    updateRestaurant(id: string, updatenursingdto: UpdateNursingDto): Promise<Nursing>;
    deleteRestaurant(id: string): Promise<{
        deleted: boolean;
    }>;
}
