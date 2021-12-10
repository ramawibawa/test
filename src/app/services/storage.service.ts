import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
	private internalStorage: Storage | null = null;

	constructor(private storage: Storage) {
		this.init();
	}

	async init() {
		// If using, define drivers here: await this.storage.defineDriver(/*...*/);
		const storage = await this.storage.create();
		this.internalStorage = storage;
	}

	// Create and expose methods that users of this service can
	// call, for example:
	public set(key: string, value: any) {
		this.internalStorage?.set(key, value);
	}

	public async get(key: string) {
		return await this.internalStorage?.get(key);
	}
}
