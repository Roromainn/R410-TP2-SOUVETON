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
        alert(rss.getResource("title")); 
    }
}