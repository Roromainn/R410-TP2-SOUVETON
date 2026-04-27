export class Resources {
    private languageCode: string;

    constructor() {
        this.languageCode = navigator.language;
    }

    get LanguageCode(): string {
        return this.languageCode;
    }
}