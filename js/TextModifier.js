import { Ressources } from './Ressource.js';
export class TextModifier {
    updateDocument() {
        let rss;
        rss = new Ressources();
        document.documentElement.lang = rss.LanguageCode;
    }
}
//# sourceMappingURL=TextModifier.js.map