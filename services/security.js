const SecurityService = [];

SecurityService.checkForParams = (params) => {
    const keys = Object.keys(params);
    const missingParams = [];

    for(let key of keys) {
        if (!params[key]) missingParams.push(key);
    }

    if (missingParams.length > 0) throw new Error(`You are missing the following params: ${missingParams}`);

}

module.exports = SecurityService;