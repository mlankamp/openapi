// This file is auto-generated by @hey-api/openapi-ts

export type SelectListItem = {
    value: string;
    title: string;
    children?: Array<SelectListItem> | null;
};

export type DeleteMultipleData = {
    body?: Array<(string)>;
    path: {
        id: string;
    };
};

export type DeleteMultipleResponse = void;

export type DeleteMultipleError = unknown;

export type $OpenApiTs = {
    '/demo/{id}': {
        post: {
            req: DeleteMultipleData;
            res: {
                /**
                 * No Content
                 */
                '204': void;
            };
        };
    };
};