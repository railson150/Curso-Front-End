let compareComThis = function (param) {
    console.log(this === param)
};

compareComThis(global);

const obj = {};
compareComThis = compareComThis.bind(obj);
compareComThis(obj);

let compareComThisArrow = param => console.log(this === param);
compareComThisArrow(global);

compareComThisArrow(module.exports);

compareComThisArrow = compareComThisArrow.bind(obj);
compareComThisArrow(obj);
compareComThisArrow(module.exports);