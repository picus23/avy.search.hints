
type historyStore = Array<string>;

const storageMaxItemsCount = 3;
const storageKey = 'search_phrase_history';

export const pushPhrase = (phrase: string): void => {
    if (phrase == "") {
        return;
    }
    
    let storage = getStorage()

    if(storage.length === storageMaxItemsCount){
        storage.shift()
    }

    storage.push(phrase)

    commitStorage(storage)
}

export const getStorage = (): historyStore => {
    const value = `; ${document.cookie}`;

    const parts = value.split(`; ${storageKey}=`);
    if (parts.length !== 2) {
        return [];
    }

    const storeVal = parts.pop()
    if (storeVal === undefined){
        return [];
    }

    const val = storeVal.split(';').shift();
    if (val === undefined) {
        return [];
    }

    try {
        return JSON.parse(val)
    } catch (error) {
        return []   
    }
}

const commitStorage = (store: historyStore): void => {
    const serialized = JSON.stringify(store)

    let date = new Date();
    date.setTime(date.getTime() + (24 * 7) * 3600 * 1000);

    document.cookie = `${storageKey}=${serialized}; path=/;expires = ${date.toUTCString()}`;
}