const axios = require("axios");
const { Logger } = require("simply-logger");
const url = `https://api.rambot.xyz`;

/**
 * The logger instance for general logging.
 * @type {Logger}
 */
const logger = new Logger(`ram-api.js`, "America/New_York", 12);

/**
 * The logger instance for API-related logging.
 * @type {Logger}
 */
const apilogger = new Logger("Ram Api", "America/New_York", 12);

/**
 * The base URL of the API.
 * @type {string}
 */
const baseURL = `${url}/demo`;

/**
 * Represents the RamApiDemo class for interacting with the RamBot API.
 */
class RamApiDemo {
  /**
   * Create a new RamApiDemo instance.
   * @param {number} [retryAfter=6000] - The time in milliseconds to wait before retrying after a rate limit error.
   * @param {number} [retry=6] - The number of retry attempts to make for rate limit errors.
   */
  constructor(retryAfter = 6000, retry = 6) {
    /** @private */
    this.baseURL = baseURL;
    /** @private */
    this.retryAfter = retryAfter;
    /** @private */
    this.retry = retry;
  }
  /**
   * Handle API request errors.
   * @private
   * @param {string} name - The name of the API request.
   * @param {Error} error - The error object from the failed request.
   * @param {Function} resolve - The promise resolve function.
   * @param {Function} reject - The promise reject function.
   * @param {string} url - The URL of the API request.
   * @param {string} type - The HTTP request type.
   * @param {number} [loop=0] - The current loop count for retries.
   */
  async _newerrors(name, error, resolve, reject, url, type, loop = 0) {
    if (error.response) {
      let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
      apilogger.error(err);
      if (
        error.response.statusText === "Too Many Requests" &&
        retryAfter >= 6000 &&
        retry >= loop &&
        type === "get"
      ) {
        logger.warn(`api rate limit reached Retrying to run ${name}`);
        retryAfter = retryAfter + 1000;
        setTimeout(async () => {
          try {
            const res = await axios.get(url);
            resolve(res.data);
          } catch (error) {
            loop++;
            new_errors(name, error, resolve, reject, url, type, loop);
          }
        }, retryAfter);
      } else {
        if (error.response.data.error.message)
          logger.error(
            `Ram Api Ran into an error while running ${name}. The problem is: ${error.response.data.error.message}.`
          );
        reject("Error Handled By Ram-api.js");
      }
    } else {
      logger.error(
        `Error running ${name}. Please report to the developers the error logged into your console!`
      );
      reject(error);
    }
  }
  // _apiRequest uses the customAsync function from Utils
  /**
   * @private
   * Fetches data from the specified API endpoint based on the provided access level.
   * @param {string} endpoint - The API endpoint to request data from.
   * @param {string} accessLevel - The access level for the request ("normal", "extended", "demo", "pro").
   * @param {Object} _options - Options object containing version, params, and headers.
   * @param {string} _options.version - The version to use (latest is v14).
   * @param {Object} _options.params - Query parameters for the request.
   * @param {Object} _options.headers - Custom headers for the request. If not demo, {"api-key": "key goes here"}.
   * @returns {Promise} A promise that resolves with the fetched data or rejects with an error message.
   */
  async _apiRequest(
    endpoint, // something like /hello or /ram
    accessLevel = "normal", // the type to use
    _options = {} // options object containing version, params, and headers
  ) {
    return new Promise(async (resolve, reject) => {
      const supportedVersions = ["v14"];
      const outdatedVersions = ["v11", "v12", "v13"];
      const notsupported = [
        "v0",
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6",
        "v7",
        "v8",
        "v9",
        "v10",
      ];
      const requestedVersion = _options.version || "v14";

      if (supportedVersions.includes(requestedVersion)) {
      } else if (outdatedVersions.includes(requestedVersion)) {
        logger.warn(
          `${requestedVersion} is outdated please update to the latest ${supportedVersions[0]}`
        );
      } else if (notsupported.includes(requestedVersion)) {
        logger.error(`${requestedVersion} is no longer supported`);
        return reject("Check console");
      }

      let baseURL = "NULL";

      if (accessLevel === "normal") {
        baseURL = `https://api.rambot.xyz/${requestedVersion}`;
      } else if (accessLevel === "extended") {
        baseURL = `https://api.rambot.xyz/extended/${requestedVersion}`;
      } else if (accessLevel === "demo") {
        baseURL = "https://api.rambot.xyz/demo";
      } else if (accessLevel === "pro") {
        baseURL = `https://api.rambot.xyz/pro/${requestedVersion}`;
      }

      try {
        const response = await axios({
          method: "get",
          url: endpoint,
          params: _options.params || {},
          baseURL: baseURL,
          headers: _options.headers || {},
        });

        resolve(response.data);
      } catch (error) {
        apilogger.error(error);
        reject(error);
      }
    });
  }
  /**
   * Get a birthday wish and image.
   * @param {string} [lang="english"] - The language for the birthday wish. Default is "english".
   * @returns {Promise<{ text: string, url: string }>} - The promise that resolves with an object containing the birthday wish text and image URL.
   */
  async birthdayAsync(lang = "english") {
    return await this._apiRequest("/bday", "demo", { params: { lang } });
  }
  /**
   * Get a laugh image.
   * @returns {Promise<{ url: string }>} - The promise that resolves with an object containing the laugh image URL.
   */
  async laughAsync() {
    return await this._apiRequest("/laugh", "demo");
  }
  /**
   * gets a random cry image and text.
   * @param {string} [lang="english"] - The language for the cry text. Default is "english".
   * @returns {Promise<{ text: string, url: string }>} - The promise that resolves with an object containing the cry text and image URL.
   */
  async cryAsync(lang = "english") {
    return await this._apiRequest("/cry", "demo", { params: { lang } });
  }
  /**
   * gets a random tired image.
   * @returns {Promise<{ url: string }>} - The promise that resolves with an object containing the tired image URL.
   */
  async tiredAsync() {
    return await this._apiRequest("/tired", "demo");
  }
  /**
   * gets a random sick image.
   * @returns {Promise<{ url: string }>} - The promise that resolves with an object containing the sick image URL.
   */
  async sickAsync() {
    return await this._apiRequest("/sick", "demo");
  }
  /**
   * gets a random slap text and image.
   * @param {string} [user1="You"] - The first user.
   * @param {string} [user2="Ram"] - The second user.
   * @returns {Promise<{ text: string, url: string, text2: string, text3: string, text4: string, textFormatted: string }>} - The promise that resolves with an object containing the slap text and image URL.
   */
  async slapAsync(user1 = "You", user2 = "Ram") {
    return await this._apiRequest("/slap", "demo", {
      params: { user1, user2 },
    });
  }
  /**
   * gets a random kiss image.
   * @returns {Promise<{ url: string }>} - The promise that resolves with an object containing the kiss image URL.
   */
  async kissAsync() {
    return await this._apiRequest("/kiss", "demo");
  }
  /**
   * gets a random hug image.
   * @returns {Promise<{ url: string }>} - The promise that resolves with an object containing the hug image URL.
   */
  async hugAsync() {
    return await this._apiRequest("/hug", "demo");
  }
  /**
   * gets a random goodNight Image and text.
   * @param {string} [lang="english"] - The language for the goodNight text. Default is "english".
   * @returns {Promise<{ text: string, url: string }>} - The promise that resolves with an object containing the goodNight text and image URL.
   */
  async goodNightAsync(lang = "english") {
    return await this._apiRequest("/goodNight", "demo", { params: { lang } });
  }
  /**
   * gets a random goodMorning image and text.
   * @param {string} [lang="english"] - The language for the goodMorning text. Default is "english".
   * @returns {Promise<{ text: string, url: string }>} - The promise that resolves with an object containing the goodMorning text and image URL.
   */
  async goodMorningAsync(lang = "english") {
    return await this._apiRequest("/goodMorning", "demo", { params: { lang } });
  }
  /**
   * gets a random cuddle image.
   * @returns {Promise<{ url: string }>} - The promise that resolves with an object containing the cuddle image URL.
   */
  async cuddleAsync() {
    return await this._apiRequest("/cuddle", "demo");
  }
  /**
   * gets a random hello text.
   * @param {string} [lang="english"] - The language for the hello text. Default is "english".
   * @returns {Promise<{ text: string}>} - The promise that resolves with an object containing the hello text.
   */
  async helloAsync(lang = "english") {
    return await this._apiRequest("/hello", "demo", { params: { lang } });
  }
  /**
   * play rps with the api.
   * @param {string} [pick="No Choice Made"] -  The choice of the player. Default is "No Choice Made".
   * @returns {Promise<{ api_choice: string, your_choice: string }>} - The promise that resolves with an object containing the rps text.
   */
  async rpsAsync(pick = "No Choice Made") {
    return await this._apiRequest("/rps", "demo", { params: { pick } });
  }
  /**
   * gets a random 8ball text.
   * @param {string} [lang="english"] - The language for the 8ball text. Default is "english".
   * @returns {Promise<{ text: string }>} - The promise that resolves with an object containing the 8ball text.
   */
  async _8ballAsync(lang = "english") {
    return await this._apiRequest("/8ball", "demo", { params: { lang } });
  }
  /**
   * gets the latest version info.
   * @returns {Promise<{ version: string, outdated: boolean, supported: boolean, latest: string  }>} - The promise that resolves with an object containing the version info.
   */
  async versionInfoAsync() {
    return await this._apiRequest("/versionCheck", "demo");
  }
  /**
   * gets the ratelimit info.
   * @returns {Promise<{ limit: number, current: number, remaining: number, resetTime: string, resetTimeFormated: string  }>} - The promise that resolves with an object containing the ratelimit info.
   */
  async rateLimitAsync() {
    return await this._apiRequest("/ratelimit", "demo");
  }
  /**
   * Generate a random number from a range.
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @returns {Promise<{ Number: number, roundedNumber: number, flooredNumber: number, enteredNumbers: string}>} - The promise that resolves with the random number.
   */
  async randomNumberAsync(min, max) {
    return await this._apiRequest("/randomNumber", "demo", {
      params: { min, max },
    });
  }
}

module.exports = { RamApiDemo };
