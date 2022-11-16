import * as fs from 'fs'
import * as readline from 'readline'
import * as zlib from 'zlib'
import {FakeSearchVolumeClient} from './fakeSearchVolumeClient'

const stream = fs.createReadStream('keywords.txt.gz')

const lineReader = readline.createInterface({
    input: stream.pipe(zlib.createGunzip())
});

const fakeSearchVolumeClient = new FakeSearchVolumeClient()

let arr: string[] = []

lineReader.on('line', line => {
    arr.push(line)

    if (arr.length < 100) return

    fakeSearchVolumeClient
        .getSearchVolume([...arr])
        .then(res => res.forEach(item => console.log(`${item.keyword} = ${item.searchVolume}`)))

    arr = []
});

