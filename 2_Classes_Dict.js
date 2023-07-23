"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
// 만약 위의 class에서 term, def에 접근은 가능하지만 수정은 불가능하게 하고싶다면,
// class Word {
//   constructor(
//     public readonly term: string,
//     public readonly def: string
//   ) {}
// }
// 이렇게 readonly를 추가해준다.
const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
console.log(dict);
console.log(dict.def("kimchi"));
