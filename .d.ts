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
		Options?: object,
	) => {
		endpoint: string;
		version: string;
		Options?: object | null;
	};

	pingAsync: () => {};
	packageVersionCheckAsync: () => {};
	updatePackageAsync: (version: sting) => {
		version?: string | "latest"
	}
}

declare class RamApiBasic {
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
