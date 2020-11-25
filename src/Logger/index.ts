import log from 'loglevel';

class Logger {
    debug (...message) {
        log.debug(...message);
    }
    info (...message) {
        log.info(...message);
    }
}

export default new Logger();