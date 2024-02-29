import formidable from 'formidable';

export const parseForm = (fields: formidable.Fields<string>) => {
    return Object.fromEntries(
        Object.entries(fields).map(([key, value]: any) => {
            return [key, value[0]];
        })
    );
};
