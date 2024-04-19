/// <reference types="multer" />
import { Restaurant } from './restaurant.schema';
import { RestaurantsService } from './restaurants.service';
import { updateRestaurantDto } from '../dto/update-restaurant.dto';
import { filterRestauranDto } from '../dto/filter-restaurant.dto';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
export declare class RestaurantsController {
    private restaurantsService;
    fileUploadService: any;
    constructor(restaurantsService: RestaurantsService);
    getAllRestaurants(query: filterRestauranDto): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    getRestaurant(id: string): Promise<Restaurant>;
    updateRestaurant(id: string, updateRestaurantDto: updateRestaurantDto): Promise<any>;
    deleteRestaurant(id: string): Promise<{
        deleted: boolean;
    }>;
    uploadFiles(file: Express.Multer.File, req: any): Promise<{
        status: boolean;
        statusText: string;
        message: string;
        fileUrl: string | true;
    } | {
        status: boolean;
        statusText: string;
        message: string;
        fileUrl?: undefined;
    }>;
}
