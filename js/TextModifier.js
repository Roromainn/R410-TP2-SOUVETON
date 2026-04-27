var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Resources } from './Resources.js';
export class TextModifier {
    constructor(resourcePath) {
        this.resourcePath = resourcePath;
    }
    updateDocument() {
        return __awaiter(this, void 0, void 0, function* () {
            let rss;
            rss = new Resources();
            document.documentElement.lang = rss.LanguageCode;
            yield rss.loadRessources(this.resourcePath);
            let elements = document.querySelectorAll("[stringres]");
            for (let i = 0; i < elements.length; i++) {
                let el = elements[i];
                let key = el.getAttribute("stringres");
                if (key) {
                    el.innerText = rss.getResource(key);
                }
            }
        });
    }
}
//# sourceMappingURL=TextModifier.js.map