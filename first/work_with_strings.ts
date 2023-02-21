export class StringConvert {
    static upperCase = (str: string): string => str[0].toUpperCase() + str.slice(1).toLowerCase();

    static wordsCount = (str: string) => {
        return str.split(' ').filter(function (num) {
            return num != ''
        }).length;
    }

    static rightSpacing = (str: string) => {
        const marks = [',', '.', '?', '!']
        str = str.replace(/\s\s+/g, ' ')
        marks.forEach((elem) => {
            let regEx = new RegExp('\\s*[' + elem + ']\\s*', "g")
            str = str.replace(regEx, elem + ' ');
        })
        return str
    }


    static uniqWordsCount = (str: string) => {
        let words = str.toLowerCase().replace(/,/g, '').split(" ")
        let wordMap: { [key: string]: number } = {};

        for (const word of words) {
            let currentWordCount = wordMap[word];
            let count = currentWordCount ? currentWordCount : 0;
            wordMap[word] = count + 1;
        }
        return wordMap;
    }
}

