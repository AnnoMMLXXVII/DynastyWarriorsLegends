export enum KINGDOMS {
    SHU = "Shu",
    WU = "Wu",
    WEI = "Wei",
    JIN = "Jin",
    OTHER = "Other"
}

export const JPG = ".jpg";

/**
 * Converts any string's first letter to uppercase and all subsequent chars to lowercase<br>
 * SHU -> Shu | KingDOM -> Kingdom | kingdom -> Kingdom | etc
 * @param str 
 * @returns 
 */
export function toCamelCase(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toUpperCase() : word.toLowerCase();
    }).replace(/\s+/g, '');
}

export function tousePrimaryImage(tousePrimaryImage: boolean) {
    return tousePrimaryImage ? "_1" : "_2"
}
