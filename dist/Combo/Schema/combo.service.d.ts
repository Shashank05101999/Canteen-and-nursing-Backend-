/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Combo } from './combo.schema';
import * as mongoose from 'mongoose';
import { FilterComboDto } from '../dto/filter-combo.dto';
import { CreateComboDto } from '../dto/Create-combo.dto';
export declare class ComboService {
    private comboModel;
    constructor(comboModel: mongoose.Model<Combo>);
    findAll(query?: FilterComboDto): Promise<Combo[]>;
    create(combo: CreateComboDto): Promise<Combo>;
    FindByID(id: string): Promise<Combo>;
    UpdateByID(id: String, combo: Combo): Promise<Combo>;
    deleteById(id: string): Promise<Combo>;
}
