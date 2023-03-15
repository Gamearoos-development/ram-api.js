import { RamApiPro } from "./Endpoints/pro";
import { RamApiBasic } from "./Endpoints/basic";
import { RamApi } from "./Endpoints/normal";
import { Logs } from "./index";

declare module "ram-api.js" {
  const Utils: Utils;
  const RamApi: RamApi;
  const RamApiPro: RamApiPro;
  const RamApiBasic: RamApiBasic;
  const Logs: Logs;
}

export declare class RamApi {
  constructor(apikey: String, version: string);

  helloAsync: (lang?: string) => {
    lang?: String | null;
  };
  _8ballAsync: (lang?: String | null) => {
    lang?: String | null;
  };
  cuddleAsync: () => {};
  goodmorningAsync: (lang?: string) => {
    lang?: string;
  };

  goodnightAsync: (lang?: string) => {
    lang?: string;
  };
  hugAsync: () => {};
  kissAsync: () => {};
  slapAsync: () => {};
  sickAsync: () => {};
  tiredAsync: () => {};
  cryAsync: (lang?: string) => {
    lang?: string;
  };
  laughAsync: () => {};
  birthdayAsync: () => {};
  version_infoAsync: () => {};
  ratelimitAsync: () => {};

  ramAsync: () => {};
  nekoparaAsync: () => {};
  version_checkAsync: () => {};
  rpsAsync: () => {};
  randomNumberAsync: (
    min: number,
    max: number
  ) => {
    min: number;
    max: number;
  };
  suggestionAsync: (
    suggestion: string,
    user?: string
  ) => { suggestion: string; user?: string };
}
export declare class RamApiPro {
  constructor(apikey: String, version: string);

  helloAsync: (lang?: string) => {
    lang?: String | null;
  };
  _8ballAsync: (lang?: String | null) => {
    lang?: String | null;
  };
  cuddleAsync: () => {};
  goodmorningAsync: (lang?: string) => {
    lang?: string;
  };

  goodnightAsync: (lang?: string) => {
    lang?: string;
  };
  hugAsync: () => {};
  kissAsync: () => {};
  slapAsync: () => {};
  sickAsync: () => {};
  tiredAsync: () => {};
  cryAsync: (lang?: string) => {
    lang?: string;
  };
  laughAsync: () => {};
  birthdayAsync: () => {};
  version_infoAsync: () => {};
  ratelimitAsync: () => {};

  ramAsync: () => {};
  nekoparaAsync: () => {};
  version_checkAsync: () => {};
  rpsAsync: () => {};
  randomNumberAsync: (
    min: number,
    max: number
  ) => {
    min: number;
    max: number;
  };
  suggestionAsync: (
    suggestion: string,
    user?: string
  ) => { suggestion: string; user?: string };
}

export declare class Utils {
  constructor();

  customAsync: (
    endpoint: string,
    api_key: string
  ) => {
    endpoint: string;
    api_key: string;
  };

  pingAsync: () => {};
  packageVersionCheckAsync: () => {};
  updatePackageAsync: (version: string) => {
    version?: string | "latest";
  };
}

export declare class RamApiBasic {
  constructor(version: string);

  helloAsync: (lang?: string) => {
    lang?: String | null;
  };
  _8ballAsync: (lang?: String | null) => {
    lang?: String | null;
  };
  cuddleAsync: () => {};
  goodmorningAsync: (lang?: string) => {
    lang?: string;
  };

  goodnightAsync: (lang?: string) => {
    lang?: string;
  };
  hugAsync: () => {};
  kissAsync: () => {};
  slapAsync: () => {};
  sickAsync: () => {};
  tiredAsync: () => {};
  cryAsync: (lang?: string) => {
    lang?: string;
  };
  laughAsync: () => {};
  birthdayAsync: () => {};
  version_infoAsync: () => {};
  ratelimitAsync: () => {};

  ramAsync: () => {};
  nekoparaAsync: () => {};
  version_checkAsync: () => {};
  rpsAsync: () => {};
  randomNumberAsync: (
    min: number,
    max: number
  ) => {
    min: number;
    max: number;
  };
  suggestionAsync: (
    suggestion: string,
    user?: string
  ) => { suggestion: string; user?: string };
}

export declare class RamApiBeta {
  constructor(version: string);
}

export declare class Logs {
  constructor(name: string);

  errorAsync: (msg: string) => { msg: string };
  infoAsync: (msg: string) => { msg: string };
  warnAsync: (msg: string) => { msg: string };
}
