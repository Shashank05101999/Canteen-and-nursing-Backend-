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
import mongoose from 'mongoose';
import { Prescription } from './prescription.schema';
import { CreatePrescriptionDto } from '../Dto/Create-prescription.dto';
import { UpdatePresciptionDto } from '../Dto/Update-prescription.dto';
import { Query } from 'express-serve-static-core';
export declare class PrescriptionService {
    private presciptionmodel;
    constructor(presciptionmodel: mongoose.Model<Prescription>);
    findAll(query: Query): Promise<Prescription[]>;
    create(createprescriptiondto: CreatePrescriptionDto): Promise<Prescription>;
    findByID(id: string): Promise<Prescription>;
    updateById(id: string, updatepresciption: UpdatePresciptionDto): Promise<Prescription>;
    deleteById(id: string): Promise<Prescription>;
}
