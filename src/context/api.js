export default class Api {
    static API_BASE_URL = "https://concordia-corsproxy.azurewebsites.net/open-concordia?api=";
    static username = "";
    static key = "";

    static isAuthorized = false;

    static async authenticatedFetch(url) {
        if (!this.isAuthorized) {
            this.getExistingCredential();
        }

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(this.username + ":" + this.key));

        let response = await fetch(this.API_BASE_URL + url, {
            method: "GET",
            headers: headers
        });

        return response;
    }

    static getExistingCredential() {
        let username = localStorage.getItem("username");
        let key = localStorage.getItem("key");

        if (username && username !== ""
            && key && key !== "") {
            this.username = username;
            this.key = key;
        }
    };

    static async checkCredential() {
        let response = await this.authenticatedFetch("/course/catalog/filter/BIOL/200/UGRD");
        this.isAuthorized = true;
        return response.ok;
    }

    static async login(username, key) {
        this.username = username;
        this.key = key;

        let isCredentialCorrect = await this.checkCredential();
        if (isCredentialCorrect) {
            localStorage.setItem("username", this.username);
            localStorage.setItem("key", key);
        }

        return isCredentialCorrect;
    }

    static async facilities_buildinglist() {
        let response = await this.authenticatedFetch("/facilities/buildinglist/");

        if (response.status === 401) {
            return "test2";
        } else {
            return response.json();
        }
    }

    static async facilities_pointlist() {
        let response = await this.authenticatedFetch("/facilities/pointlist/");

        if (response.status === 401) {
            return "test2";
        } else {
            return response.json();
        }
    }

    static async facilities_environmental(from, to) {
        // /facilities/environmental/filter/2019-3-15 00:00:00/2019-3-16 00:00:00
        // YYYY-MM-DD HH:MM:SS

        let query = "/facilities/environmental/filter/"
            + from + " 00:00:00/"
            + to + " 00:00:00";

        let response = await this.authenticatedFetch(query);

        if (response.status === 401) {
            return "test2";
        } else {
            return response.json();
        }
    }
}