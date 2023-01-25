import FormData from "form-data";

export function parseObjectToFormData(values: object, ...exclude: string[]): FormData {
    const body = new FormData();
    for (let valuesKey in values) {
        if (exclude.includes(valuesKey)) {
            continue
        }
        if (values.hasOwnProperty(valuesKey)) {
            if (Array.isArray(values[valuesKey])) {
                let arr: any[] = values[valuesKey]
                for (let i = 0; i < arr.length; i++) {
                    let value = arr[i]
                    if (typeof value === "object") {
                        for (let valueKey in value) {
                            body.append(`${valuesKey}[${i}].${valueKey}`, value[valueKey])
                        }
                    } else {
                        body.append(`${valuesKey}[${i}]`, value)
                    }
                }
                continue
            }
            body.append(valuesKey, values[valuesKey])
        }
    }
    return body
}

export function detectTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') {
        return 'light'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}