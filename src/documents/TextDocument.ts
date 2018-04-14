import { Document } from './Document';
import { urlToPath } from '../utils';

export class TextDocument extends Document {
    constructor(public url: string, public content: string) {
        super();
    }

    getText() {
        return this.content;
    }

    getURL() {
        return this.url;
    }

    setText(text: string) {
        this.content = text;
    }

    getFilePath(): string | null {
        return urlToPath(this.url);
    }
}
