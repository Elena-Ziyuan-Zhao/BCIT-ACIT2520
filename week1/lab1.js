const os = require("os");
const coreNumber = os.cpus().length ;
console.log(coreNumber) ;

const wordPosition = (words) => {
    // your code here
    
    let result = {} ;
    for (let i=0; i < words.length; i++ ) {
        if (words[i] in result) {
            result[words[i]].push(i);
        } else {
            result[words[i]] = [i];
        }
    };
 
    return result

}
    const input = [
      "buy",
      "it",
      "use",
      "it",
      "break",
      "it",
      "fix",
      "it",
      "trash",
      "it",
      "change",
      "it",
      "mail",
      "upgrade",
      "it",
    ];
    
    const output = wordPosition(input);
    
    console.log(output)

    /*
    Output should look like so:
    {
      break: [ 4 ],
      buy: [ 0 ],
      change: [10],
      fix: [ 6 ],
      it:  [1, 3, 5, 7, 9, 11, 14],
      mail: [ 12 ],
      trash: [ 8 ],
      upgrade: [ 13 ],
      use: [ 2 ],
    }
    
    */