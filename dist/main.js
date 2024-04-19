"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
    };
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Canteen and Nursing')
        .setDescription('The canteen and nursing API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useStaticAssets(path.join(__dirname, '../public'));
    app.enableCors(corsOptions);
    await app.listen(3002);
    app.useGlobalPipes(new common_1.ValidationPipe());
}
bootstrap();
//# sourceMappingURL=main.js.map