export default class Api {
    static API_BASE_URL = "https://opendata.concordia.ca/API/v1/";
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

        // if (response.status === 401) {
        //     window.history.go("/login");
        // } else {
        //     return response;
        // }
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
        let response = await this.authenticatedFetch("course/catalog/filter/BIOL/200/UGRD");
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
        let response = await this.authenticatedFetch("facilities/buildinglist/");

        if (response.status === 401) {
            return "test2";
        } else {
            return response.json();
        }
    }
}