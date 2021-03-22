const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let s = options.separator === undefined ? "+" : options.separator;
    let ar = Array(options.repeatTimes)
                .fill(str + (options.addition === undefined ?
                     "" : 
                     repeater(options.addition,
                        {repeatTimes:options.additionRepeatTimes,
                            separator:options.additionSeparator ? options.additionSeparator : "|"}
                            )
                        )
                    )
                .join(s);
    return ar;
};
