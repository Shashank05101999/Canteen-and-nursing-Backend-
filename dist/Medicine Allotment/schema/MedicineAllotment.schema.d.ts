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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class MedicineAllotment {
    Usertype: string;
    User: string;
    Medicines: string;
    Injuryreason: string;
    Initial: string;
    Issuetime: string;
    ExpireDate: Date;
}
export declare const MedicineAllotmentSchema: import("mongoose").Schema<MedicineAllotment, import("mongoose").Model<MedicineAllotment, any, any, any, import("mongoose").Document<unknown, any, MedicineAllotment> & MedicineAllotment & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MedicineAllotment, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MedicineAllotment>> & import("mongoose").FlatRecord<MedicineAllotment> & {
    _id: import("mongoose").Types.ObjectId;
}>;
