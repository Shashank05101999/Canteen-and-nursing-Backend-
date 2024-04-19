import { Combo } from './combo.schema';
import { ComboService } from './combo.service';
import { FilterComboDto } from '../dto/filter-combo.dto';
import UpdateComboDto from '../dto/update-combo.dto';
import { CreateComboDto } from '../dto/Create-combo.dto';
export declare class ComboController {
    private comboService;
    constructor(comboService: ComboService);
    getAllCombo(query: FilterComboDto): Promise<Combo[]>;
    createCombo(createComboDto: CreateComboDto): Promise<Combo>;
    getCombo(id: string): Promise<Combo>;
    updateCombo(id: string, updateComboDto: UpdateComboDto): Promise<Combo>;
    deleteCombo(id: string): Promise<{
        deleted: boolean;
    }>;
}
