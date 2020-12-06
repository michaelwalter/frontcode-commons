import chalk from 'chalk';

enum MODE {
    DEFAULT = "DEFAULT",
    DEBUG = "DEBUG",
}

enum DEFAULTS {
    LOCALES = 'pl-PL'
}

export namespace Logger {

    export const info = (...message: any): void => {
        console.log(...message)
    }

    export const success = (...message: any): void => {
        console.log(chalk.green(...message));
    }

    export const warn = (...message: any): void => {
        console.log(chalk.yellow(...message));
    }

    export const error = (...message: any): void => {
        console.log(chalk.red(...message));
    }

    export const debug = (...message: any): void => {
        if (mode === MODE.DEBUG) {
            const formatedDate = timeLogger.format(Date.now());
            console.log(chalk.bold.white(`[${formatedDate}]`), ...message);
        }
    }

    export const startDebugMode = (): void => {
        mode = MODE.DEBUG
    }

    export const endDebugMode = (): void => {
        mode = MODE.DEFAULT;
    }

    const getLocales = (): string => {
        if (typeof navigator !== 'undefined') {
            return (navigator.languages && navigator.languages[0]) || DEFAULTS.LOCALES;
        } else {
            return process.env.LANG || DEFAULTS.LOCALES;
        }
    }

    const locales = getLocales();

    const timeOptions = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
    }

    const timeLogger =  new Intl.DateTimeFormat(locales, timeOptions);

    let mode = MODE.DEFAULT;

}