import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const ops = {
    // order and from where user language should be detected
    order: ["navigator"],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: "myDomain",

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // only detect languages that are in the whitelist
    checkWhitelist: true
};
const languageDetector = new LanguageDetector(null, ops);

const availableLanguages = ["en", "ja", "ja-JP"];

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(languageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: "en",
        debug: false,
        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        backend: {
            loadPath: getLocalizedStrings()
        }
    });

export default i18n;

function getLocalizedStrings() {
    let currentHostAndPort =
        document.location.hostname + ":" + document.location.port;

    if (
        currentHostAndPort === "localhost:3000" ||
        currentHostAndPort === "127.0.0.1:3000"
    ) {
        return "/locales/{{lng}}/{{ns}}.json";
    }

    return "/files/locales/{{lng}}/{{ns}}.json";
}
