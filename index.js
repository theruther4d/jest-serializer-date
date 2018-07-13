function extractValues(date) {
    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        date: date.getUTCDate()
    }
}

function isToday(date) {
    var today = extractValues(new Date());
    var value = extractValues(date);

    if (
        today.year !== value.year ||
        today.month !== value.month ||
        today.date !== value.date
    ) {
        return false;
    }

    return true;
}

module.exports = {
    test: function (val) {
        if (typeof val === 'object' && 'getFullYear' in val) {
            return true;
        }

        return false;
    },
    print: function (val) {
        if (isToday(val)) {
            return `Current Date`
        }

        var d = extractValues(val);
        return [d.month, d.date, d.year].join('-');
    }
}