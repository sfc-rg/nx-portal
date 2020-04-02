export const split = (array, n) =>
    array.reduce(
        (a, c, i) =>
            i % n == 0
                ? [...a, [c]]
                : [...a.slice(0, -1), [...a[a.length - 1], c]],
        []
    );

export const formatDate = (date, format) => {
    if (!format) {
        format = "YYYY/MM/DD hh:mm:ss";
    }

    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));

    return format;
};

export const convertDateString = djDateString => {
    return djDateString
        .split("T")[0]
        .split("-")
        .join("/");
};

export const convertTimeString = djDateString => {
    let processing = djDateString
        .split("T")[1]
        .split("+")[0]
        .split(":")
        .slice(0, 2)
        .join(":");

    return processing;
};
