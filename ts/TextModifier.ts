import { Resources } from './Resources.js';

export class TextModifier{
    private resourcePath: string;

    constructor(resourcePath: string) {
        this.resourcePath = resourcePath;
    }

    public async updateDocument()
    {
        let rss:Resources
        rss = new Resources()

        document.documentElement.lang = rss.LanguageCode;
        await rss.loadRessources(this.resourcePath);
        let elements = document.querySelectorAll("[stringres]");

        for (let i = 0; i < elements.length; i++) {
            let el = elements[i] as HTMLElement;

            let key = el.getAttribute("stringres");

            if (key) {
                el.innerText = rss.getResource(key) ; 
            }
        }

    }
}