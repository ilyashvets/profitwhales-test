export interface ISearchVolumeClient {
    /**
     * For each keyword in `keywords` array calculates it's search volume.
     * Returns an array of objects with keyword text and it's calculated search volume.
     * Order of returned keywords is same as in provided `keywords` array.
     *
     * @param keywords Should be an array of keywords with max 100 elements. If not array or has more than 100 elements - throws an error
     */
    getSearchVolume(keywords: string[]): Promise<{ keyword: string; searchVolume: number }[]>;
}

export class FakeSearchVolumeClient implements ISearchVolumeClient {
    public async getSearchVolume(keywords: string[]): Promise<{ keyword: string; searchVolume: number }[]> {
        if (!Array.isArray(keywords) || keywords.length > 100) {
            throw new Error(`Not valid 'keywords' parameter. Should be an array of string with max 100 elements`);
        }

        await this._wait(2000);

        return keywords.map(x => ({
            keyword: x,
            searchVolume: this._randomIntBetween(0, 100000),
        }));
    }

    private async _wait(time: number): Promise<void> {
        return new Promise<void>(resolve => setTimeout(resolve, time));
    }

    /**
     * Including both min and max
     */
    private _randomIntBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}