import {PhrasesBase} from "./PhrasesBase";

export {}

const start = {
    "Ты":PhrasesBase.FirstView,
    "У тебя":PhrasesBase.SecondView,
    "К тебе":PhrasesBase.ThirdView,
    "Пусть":PhrasesBase.FourthView,
    "Желаю":PhrasesBase.FifthView,
}

const startPhrase = new Map<string,string[]>(Object.entries(start))

function shuffle(array:string[]){
    let j:number;
    for (let i = array.length-1; i > 0; i--){
        j = Math.floor(Math.random() * array.length)

        let t = array[i]
        array[i] = array[j]
        array[j]= t
    }

    let tmp = array.slice(0,Math.floor(Math.random()*5));
    return tmp.length!==0 ? tmp : [array[Math.floor(Math.random()*5) ]]
}


export function createCongrats() {


    const objectKeysPhrase = Object.keys(start)
    const mixStartKey  = Math.floor(Math.random() * objectKeysPhrase.length)

    const mixSecondPhrase = shuffle(startPhrase.get(objectKeysPhrase[mixStartKey]) || [])

    let a = [objectKeysPhrase[mixStartKey],mixSecondPhrase]

    return [objectKeysPhrase[mixStartKey],mixSecondPhrase]


}
