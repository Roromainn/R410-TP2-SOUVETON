import { Resources } from './Resources.js';
export class TextModifier {
    updateDocument() {
        let rss;
        rss = new Resources();
        document.documentElement.lang = rss.LanguageCode;
    }
}
//# sourceMappingURL=TextModifier.js.map