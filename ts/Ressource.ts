export class Resources {
    private languageCode: string;

    constructor() {
        this.languageCode = navigator.language;
        console.log(this.languageCode)
    }

    get LanguageCode(): string {
        return this.languageCode;
    }
}