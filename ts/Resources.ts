export class Resources {
    private languageCode: string;
    private resources : Map<string,string>

    constructor() {
        this.languageCode = navigator.language;
        this.resources = new Map<string,string>() ;
    }

    get LanguageCode(): string {
        return this.languageCode;
    }

    public async loadRessources(path: string): Promise<void> {
        let response = await fetch(path + "/" + this.languageCode + ".json");

        if (!response.ok) {
            response = await fetch(path + "/default.json");
        }

        let data = await response.json();

        for (let i = 0; i < data.length; i++) {
            this.resources.set(data[i].name, data[i].value);
        }
    }

    getResource(name: string): string {
        let value = this.resources.get(name);

        if (value) {
            return value;
        } else {
            return name;
        }
    }
}