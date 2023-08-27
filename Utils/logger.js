const { Logger } = require("simply-logger");

/**
 * Represents a console execution utility with logging capabilities.
 */
class ExecuteConsole {
  /**
   * Creates an instance of ExecuteConsole.
   *
   * @param {string} name - The name for the logger.
   */
  constructor(name) {
    /**
     * The logger instance for logging messages.
     * @private
     * @type {Logger}
     */
    this.log = new Logger(name, "America/New_York", 12);
  }

  /**
   * Logs an error message asynchronously.
   *
   * @param {string} msg - The error message to log.
   */
  async errorAsync(msg) {
    this.log.error(msg);
  }

  /**
   * Logs an informational message asynchronously.
   *
   * @param {string} msg - The information message to log.
   */
  async infoAsync(msg) {
    this.log.info(msg);
  }

  /**
   * Logs a warning message asynchronously.
   *
   * @param {string} msg - The warning message to log.
   */
  async warnAsync(msg) {
    this.log.warn(msg);
  }
}

module.exports = { ExecuteConsole };
