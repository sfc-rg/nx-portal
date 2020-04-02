import React from "react";

export class APIClient extends React.Component {
    static POST(entry, structure, func, additionalHeaders) {
        const method = "POST";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
            //"Device-Agent": "WebShell/0.0.1 2ooReactFront/0.0.1",
            //additionalHeaders
        };

        var body = JSON.stringify(structure);

        this.requestAPI(entry, method, headers, body, func);
    }

    static GET(entry, func, additionalHeaders) {
        const method = "GET";
        const headers = {
            /*
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Device-Agent': 'WebShell/0.0.1 2ooReact/0.0.1',
            additionalHeaders
            */
        };
        this.requestAPI(entry, method, headers, "", func);
    }

    static requestAPI(entry, method, headers, body, func) {
        if (method === "GET") {
            fetch(this.entryHost() + entry, { method, headers })
                .then(res => res.json())
                .then(data => {
                    func(data);
                })
                .catch(console.log);
        } else {
            fetch(this.entryHost() + entry, { method, headers, body })
                .then(res => res.json())
                .then(data => {
                    func(data);
                })
                .catch(console.log);
        }
    }

    static entryHost() {
        var hostName = document.location.hostname;

        return hostName === "localhost" || hostName === "127.0.0.1"
            ? "http://127.0.0.1:8000"
            : "https://example.com";
    }
}

export function AuthToken() {
    return "Bearer " + localStorage.getItem("BearToken");
}
