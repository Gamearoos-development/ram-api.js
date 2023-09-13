import { Logger } from "@classycrafter/super-logger";
import axios from "axios";



const logger = new Logger({name: "Ram Bot Development", timezone: "America/New_York", tzformat: 12, writelogs: false, colored: true, custom: {
    character: "*",
    gray: "#bbbbbb",
    namecolor: "#ff0000",
    processcolor: "#ff6400",
    titlecolor: "#00ff78",
    textcolor: "#00ff8f",
    datecolor: "#00a6ff"
  }, colors: {
    grey: '#bbbbbb',
    gray: '#4C4C4C',
    blue: '#48ACF8',
    loggernamecolor: '#F2C5E0',
    processcolor: '#D43790',  info: {
      color: '#59E77D',
      dark: '#11cc37',
      background: '#D2EED9',
      highlight: false,
  },
  debug: {
      color: '#68E3DF',
      dark: '#13aba4',
      background: '#D5F5F4',
      highlight: false,
  },
  warn: {
      color: '#F2D349',
      dark: '#c9a81b',
      background: '#FAEFBB',
      highlight: false,
  },
  error: {
      color: '#F6545C',
      dark: '#dc222c',
      background: '#FACBCD',
      highlight: false,
  },
  fatal   : {
      color: '#F71111',
      dark: '#9b0000',
      background: '#FAACAC',
      highlight: true,
  }}})

  export class DemoEndpoints {
    private retryAfter;
    private retry;
    private baseURL;
    private version;
   
    
   
    constructor(retryAfter= 60000, retry = 6) {
        
        this.retryAfter = retryAfter;
        this.retry = retry;
        this.baseURL = "https://api.rambot.xyz/demo"
        this.version = "v14"
    }
    private async _newErrors(endpoint: string, error: any, resolve: any, reject: any, baseURL: string, type: string, _options: any, loop = 0) {
       
        if (error.response) {
            let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
            logger.error(err, "ram-api");
            if (
              this.retry > 0 &&
              error.response.statusText === "Too Many Requests" &&
              this.retry >= loop &&
              type === "get"
            ) {
              logger.warn(`api rate limit reached Retrying to run ${endpoint}`, "ram-api.js");
      
              setTimeout(async () => {
      
                try {
                  const response = await axios({
                    method: "get",
                    url: endpoint,
                    params: _options.params || {},
                    baseURL: baseURL,
                    headers: _options.headers || {},
                  });
      
                  resolve(response.data);
                } catch (err) {
                  loop++;
                  this._newErrors(
                    endpoint,
                    err,
                    resolve,
                    reject,
                    baseURL,
                    type,
                    _options,
                    loop
                  );
                }
              }, this.retryAfter);
            } else {
              if (error.response.data.error.message)
                logger.error(
                  `Ram Api Ran into an error while running ${endpoint}. The problem is: ${error.response.data.error.message}.`, "ram-api.js"
                );
              reject("Error Handled By Ram-api.js");
            }
          } else {
            logger.error(
              `Error running ${endpoint}. Please report to the developers the error logged into your console!`, "ram-api.js"
            );
            console.log(error);
            reject(error);
          }
    }

    private _apiRequest(
        endpoint: string,
        _options: {version: string, params?: {}, headers?: {}}
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
      
      
                let baseURL = this.baseURL;
      
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
              this._newErrors(
                endpoint,
                error,
                resolve,
                reject,
                baseURL,
                "get",
                _options
              );
            }
          });
    }

    async birthdayAsync(lang = "english") {
        return await this._apiRequest("/bday", {
            params: { lang },
            version: this.version
        });
      }
      async laughAsync() {
        return await this._apiRequest("/laugh", {version: this.version});
      }
      async cryAsync(lang = "english") {
        return await this._apiRequest("/cry", { params: { lang }, version: this.version });
      }
  }