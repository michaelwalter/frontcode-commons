export declare namespace Logger {
    const info: (...message: any) => void;
    const success: (...message: any) => void;
    const warn: (...message: any) => void;
    const error: (...message: any) => void;
    const debug: (...message: any) => void;
    const startDebugMode: () => void;
    const endDebugMode: () => void;
}
