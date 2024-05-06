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
import { MedicineAllotment } from './MedicineAllotment.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { CreateMedicineAllotmentDto } from '../dto/CreateMedicineAllotmentDTO';
import { UpdateMedicineAllotmentDto } from '../dto/UpdateMedicineAllotmentDto';
export declare class MedicineAllotmentService {
    private medicineallotmentmodel;
    constructor(medicineallotmentmodel: mongoose.Model<MedicineAllotment>);
    FindAll(query: Query): Promise<MedicineAllotment[]>;
    Create(createmedicineallomentdto: CreateMedicineAllotmentDto): Promise<MedicineAllotment>;
    findByID(id: string): Promise<MedicineAllotment>;
    updateById(id: string, updatemedicineallotmentdto: UpdateMedicineAllotmentDto): Promise<MedicineAllotment>;
    deleteById(id: string): Promise<MedicineAllotment>;
}
