export class Resources {
    private languageCode: string;
    private resources : Map<String,String>

    constructor() {
        this.languageCode = navigator.language;
        this.resources = new Map<string,string>() ;
    }

    get LanguageCode(): string {
        return this.languageCode;
    }

    public async loadRessources(path:string):Promise<void> {
        try {
            await fetch(path);
        }
        catch{
            await fetch("res/default.json")
        }
    }
}