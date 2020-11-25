import log from 'loglevel';

enum MODE {
    DEFAULT = "DEFAULT",
    DEBUG = "DEBUG",
}


class Logger {
    private _mode: MODE = MODE.DEFAULT;

    debug (...message: any) {
        console.log('... DEBUG ...');
        if (this.mode === MODE.DEBUG) {
            log.debug(...message);
        }
    }
    info (...message: any) {
        log.info(...message);
    }

    set mode (type: MODE) {
        this._mode = type;
    }

    get mode (): MODE {
        return this._mode;
    }
}

export default new Logger();