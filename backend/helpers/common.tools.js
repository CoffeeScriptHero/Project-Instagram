exports.pick = (object, keys) =>
    keys.reduce(
        (acc, key) =>
            object[key] === undefined ? acc : { ...acc, [key]: object[key] },
        {}
    );
