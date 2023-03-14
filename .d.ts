import { RamApiPro } from "./Endpoints/pro";

declare module "ram-api.js" {
  const Utils: Utils;
  const RamApi: RamApi;
  const RamApiPro: RamApiPro;
  const RamApiBasic: RamApiBasic;
}

declare class RamApi {
  constructor(apikey: sting, version: string);

  helloAsync: (lang?: string) => {
    lang?: sting | null;
  };
  _8ballAsync: (lang?: sting | null) => {
    lang?: sting | null;
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
  memeAsync: () => {};
  catsAsync: () => {};
  animeAsync: () => {};
  ramAsync: () => {};
  nekoparaAsync: () => {};
  version_checkAsync: () => {};
  apiinfoAsync: () => {};
  rpsAsync: () => {};
}
declare class RamApiPro {
  constructor(apikey: sting, version: string);

  helloAsync: (lang?: string) => {
    lang?: sting | null;
  };
  _8ballAsync: (lang?: sting | null) => {
    lang?: sting | null;
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
  memeAsync: () => {};
  catsAsync: () => {};
  animeAsync: () => {};
  ramAsync: () => {};
  nekoparaAsync: () => {};
  version_checkAsync: () => {};
  rpsAsync: () => {};
}

declare class Utils {
  constructor();

  customAsync: (
    endpoint: string,
    version: string,
    Options?: object
  ) => {
    endpoint: string;
    version: string;
    Options?: object | null;
  };

  pingAsync: () => {};
  packageVersionCheckAsync: () => {};
  updatePackageAsync: (version: string) => {
    version?: string | "latest";
  };
}

declare class RamApiBasic {
  constructor(version: string);

  helloAsync: (lang?: string) => {
    lang?: sting | null;
  };
  _8ballAsync: (lang?: sting | null) => {
    lang?: sting | null;
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
  memeAsync: () => {};
  catsAsync: () => {};
  animeAsync: () => {};
  ramAsync: () => {};
  nekoparaAsync: () => {};
  version_checkAsync: () => {};
  rpsAsync: () => {};
}

declare class RamApiBeta {
  constructor(version: string);

  randomNumberAsync: (min: number, max: number) => {};
}

declare class Logs {
  constructor(name: string);

  errorAsync: (msg: string) => {};
  infoAsync: (msg: string) => {};
  warnAsync: (msg: string) => {};
}
