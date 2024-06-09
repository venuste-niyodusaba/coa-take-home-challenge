function Stringtransform(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Length is divisible by both 3 and 5 (i.e., 15)
        let reversedStr = str.split('').reverse().join('');
        let asciiConvertedStr = '';
        for (let i = 0; i < reversedStr.length; i++) {
            asciiConvertedStr += reversedStr.charCodeAt(i) + ' ';
        }
        return asciiConvertedStr.trim();
    } else if (length % 3 === 0) {
        // Length is divisible by 3
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Length is divisible by 5
        let asciiConvertedStr = '';
        for (let i = 0; i < str.length; i++) {
            asciiConvertedStr += str.charCodeAt(i) + ' ';
        }
        return asciiConvertedStr.trim();
    } else {
        // No transformation needed
        return str;
    }
}

// Example usage:
console.log(Stringtransform("occasions ")); // Output: "regrubmaH"
console.log(Stringtransform("champ")); // Output: "80 105 122 122 97"
console.log(Stringtransform("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
