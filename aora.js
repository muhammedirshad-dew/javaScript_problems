// using startsWith

function abc(abc) {
    return abc.startsWith("a") || abc.startsWith('A') ? "starting with a or A": "not starting with a or A";
}

console.log(abc("AudioBufferSourceNode")); // starting with a or A

// using index

function starta(word){
    return word[0] == "a" ? "starting with a": word[0] =="A" ?"start with A": "try again";
}
console.log(starta("AudioBufferSourceNode")); // starting with a