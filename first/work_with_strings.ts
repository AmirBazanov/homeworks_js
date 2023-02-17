export class StringConvert {
    static upperCase = (str: string): string => str[0].toUpperCase() + str.slice(1).toLowerCase();

    static wordsCount = (str: string) => {
        return str.split(' ').filter(function (num) {
            return num != ''
        }).length;
    }

    static rightSpacing = (str: string) => {
        const marks = [',', '.', '?', '!']
        let convertedStr = ''
        let prevChar = '';
        str = str.replace(/\s\s+/g, ' ')
        for (const char of str.split('')) {
            if (!marks.includes(char)) {
                convertedStr += char
            } else {
                if (prevChar == ' ') {
                    convertedStr = convertedStr.slice(0, convertedStr.length - 1)
                }
                convertedStr += char + ' '
            }
            prevChar = char
        }
        return convertedStr.replace(/\s\s+/g, ' ')
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

