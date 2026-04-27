import { Resources } from './Resources.js';
import { TextModifier } from './TextModifier.js';

const res = new Resources();

window.onload = async () => {
    const tm = new TextModifier("/res");
    await tm.updateDocument();
};