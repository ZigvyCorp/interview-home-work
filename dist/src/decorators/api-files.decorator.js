"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMultiFiles = void 0;
const swagger_1 = require("@nestjs/swagger");
const ApiMultiFiles = (fileName = 'files') => (target, propertyKey, descriptor) => {
    (0, swagger_1.ApiBody)({
        type: 'multipart/form-data',
        required: true,
        schema: {
            type: 'object',
            properties: {
                [fileName]: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    })(target, propertyKey, descriptor);
};
exports.ApiMultiFiles = ApiMultiFiles;
//# sourceMappingURL=api-files.decorator.js.map