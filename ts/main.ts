import { Resources } from './Resources.js';
import { TextModifier } from './TextModifier.js';

const res = new Resources();
const tm = new TextModifier();

tm.updateDocument();

res.loadRessources("res/"+document.documentElement.lang+".json")
