import { Resources } from './Resources.js';

export class TextModifier{
    public updateDocument()
    {
        let rss:Resources
        rss = new Resources()

        document.documentElement.lang = rss.LanguageCode;
    }
}