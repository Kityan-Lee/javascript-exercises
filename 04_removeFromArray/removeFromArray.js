const removeFromArray = function(array) {
    let args = Array.from(arguments);
    args.splice(0, 1);

    for (const i of args) {
        for (const j in array) {
            if (i == array[j] && typeof i == typeof array[j]) {
                array.splice(j, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
