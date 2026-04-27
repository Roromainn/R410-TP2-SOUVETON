import { Ressources } from './Ressource.js';

export class TextModifier{
    public updateDocument()
    {
        let rss:Ressources
        rss = new Ressources()

        document.documentElement.lang = rss.LanguageCode;
    }
}