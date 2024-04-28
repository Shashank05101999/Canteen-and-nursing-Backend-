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
import { MedicineStock } from './Medicinestock.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
export declare class MedicineStockService {
    private MedicineStockModel;
    constructor(MedicineStockModel: mongoose.Model<MedicineStock>);
    FindAll(query: Query): Promise<MedicineStock[]>;
    Create(medicinestock: MedicineStock): Promise<MedicineStock>;
    findByID(id: string): Promise<MedicineStock>;
    updateById(id: string, medicinestock: MedicineStock): Promise<MedicineStock>;
    DeleteById(id: string): Promise<MedicineStock>;
}
