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
export declare enum Category {
    COMBO_FOOD = "Veg",
    CAFE = "Combo",
    COMBO_VEG_NONVEG = "Non-Veg"
}
export declare class Restaurant {
    name: string;
    description: string;
    expiredate: Date;
    category: string;
    fileurl: string;
    price: Number;
    stars: Number;
}
export declare const RestaurantSchema: import("mongoose").Schema<Restaurant, import("mongoose").Model<Restaurant, any, any, any, import("mongoose").Document<unknown, any, Restaurant> & Restaurant & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Restaurant, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Restaurant>> & import("mongoose").FlatRecord<Restaurant> & {
    _id: import("mongoose").Types.ObjectId;
}>;
