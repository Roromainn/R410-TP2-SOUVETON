import { TextModifier } from './TextModifier.js';

export class MainView {
    private textModifier: TextModifier;

    constructor(path: string) {
        this.textModifier = new TextModifier(path);
        this.setLanguage();

        window.addEventListener("languagechange", () => {
            this.setLanguage();
        });
    }

    private async setLanguage() {
        await this.textModifier.updateDocument();
    }
}