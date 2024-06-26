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
import * as mongoose from 'mongoose';
import { Restaurant } from './restaurant.schema';
import { filterRestauranDto } from '../dto/filter-restaurant.dto';
import { updateRestaurantDto } from '../dto/update-restaurant.dto';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
export declare class RestaurantsService {
    private restaurantModel;
    constructor(restaurantModel: mongoose.Model<Restaurant>);
    findAll(query?: filterRestauranDto): Promise<Restaurant[]>;
    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    findByID(id: string): Promise<Restaurant>;
    updateById(id: string, updateRestaurantDto: updateRestaurantDto): Promise<any>;
    deleteById(id: string): Promise<Restaurant>;
}
