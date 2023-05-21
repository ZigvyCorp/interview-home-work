"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const blog_module_1 = require("./modules/blog/blog.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("./database");
const typeorm_2 = require("typeorm");
const comment_module_1 = require("./modules/comment/comment.module");
const cloudinary_module_1 = require("./modules/cloudinary/cloudinary.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${process.cwd()}/.env`,
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: String(process.env.DB_PASSWORD),
                database: process.env.DB_DATABASE_NAME,
                migrations: database_1.migrations,
                autoLoadEntities: true,
                entities: ["dist/src/modules/**/entities/**/*{.js,.ts}"],
                migrationsTableName: process.env.MIGRATIONS_TABLE_NAME,
                logging: true,
                migrationsRun: Boolean(process.env.DB_MIGRATION_RUN),
            }),
            blog_module_1.BlogModule,
            comment_module_1.CommentModule,
            cloudinary_module_1.CloudinaryModule
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map