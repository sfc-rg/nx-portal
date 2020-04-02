/* eslint-disable no-alert, no-useless-escape, no-console */

export const ValidationType = {
    URL: "URL",
    Email: "Email",
    Password: "Password",
    PasswordLetterConditions: "PasswordLetterConditions",
    Empty: "Empty"
};

export class Validator {
    static validate(type, text) {
        let isValid = true;

        switch (type) {
            case ValidationType.URL:
                isValid = /(bhaa:\/\/.)|(wifi:\/\/.)|(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/.test(
                    text
                );
                break;

            case ValidationType.Empty:
                isValid = !(text === "" || text === undefined);
                break;

            case ValidationType.Email:
                isValid = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    text
                );
                break;

            case ValidationType.Password:
                isValid = !(text.length < 8 || text.length > 500);
                break;

            case ValidationType.PasswordLetterConditions:
                isValid = passwordCondition(text);
                break;
            default:
        }

        return isValid;
    }
}

function passwordCondition(passStr) {
    let passwdString = passStr.split("");
    let numberCount = 0;
    let symbolCount = 0;
    let alphabetCount = 0;
    for (var i = 0; i < passwdString.length; i++) {
        if (isNaN(passwdString[i])) {
            numberCount += 1;
        }
    }

    for (var j = 0; j < passwdString.length; j++) {
        if (
            passwdString[j].search(
                /[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g
            )
        ) {
            symbolCount += 1;
        }
    }

    for (var k = 0; k < passwdString.length; k++) {
        if (
            passwdString[k].search(
                /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/g
            )
        ) {
            alphabetCount += 1;
        }
    }

    if (numberCount < 1 || symbolCount < 1 || alphabetCount < 1) {
        return false;
    }

    return true;
}
