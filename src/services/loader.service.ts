import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    constructor() {

    }

    // to show the loader
    showLoader() {
    }

    // to hide the loader
    hideLoader() {
    }

    // to show the loader
    show() {
        document.getElementById('loader').style.display = 'flex';
        document.getElementById('root').style.display = 'none';
    }

    // to hide the loader
    hide() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('root').style.display = 'block';
    }
}
