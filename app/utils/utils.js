const objectToDatabase = (obj) => {
    let novo = {};

    const regex = /[A-Z]/;

    for (let prop in obj) {
        const valor = obj[prop];

        while (regex.test(prop)) {
            const result = regex.exec(prop);
            prop = prop.replace(regex, `_${result[0].toLowerCase()}`);
        }

        novo[prop] = valor;
    }

    return novo;
};

const databaseToObject = (obj) => {
    let novoObj = {};

    for (let prop in obj) {
        const valor = obj[prop];

        const token = prop.split('_');

        for (let i = 1; i < token.length; i++) {
            token[i] = `${token[i].substr(0, 1).toUpperCase()}${token[i].substr(1)}`;
        }

        const novaProp = token.join('');

        novoObj[novaProp] = valor;
    }

    return novoObj;
};

module.exports = () => {
    return {
        objectToDatabase,
        databaseToObject
    }
};
