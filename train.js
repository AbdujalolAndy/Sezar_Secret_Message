//Alphabet and code
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let code = -100;

//DEFINE NEW MESSAGE
const message = 'HELLO THiS iS ME'; // Should consider Lower and Upper cases

//Checking code size
if(code>alphabet.length || code<alphabet.length*-1){
    code%=alphabet.length;
    console.log("code: ",code);
}

//Decode the Message
async function decodedMessage(message, code){
    try{
        if(typeof(message) !== 'string' || message === ''){
            throw new Error('Message is empty');
        }else{
            result = []
            for(let word of message.split(' ')){
                let decodedWord = '';
                word.split('').filter((letter)=>{
                    let index = alphabet.indexOf(letter.toLowerCase())+code;
                    if(index<0){
                        index += (alphabet.length-1);
                    }else if(index>(alphabet.length-1)){
                        index -= (alphabet.length-1);
                    }
                    if(letter===letter.toUpperCase()){
                        decodedWord += alphabet[index].toUpperCase();
                    }else{
                        decodedWord += alphabet[index];
                    }
                })
                result.push(decodedWord);
            }
            return result.join(' ');
        }
    }
    catch(err){
        throw err;
    }

}

//Encode the Message
async function encodeMessage(decodedText, code){
    const message = decodedText;
    return await decodedMessage(message, code);
}
 
//Run it
async function run(){
    try{
        const decodedText = await decodedMessage(message, code);
        console.log('Secret=>', decodedText);
        setTimeout(async ()=>{
            code*=-1;
            const encodedText = await encodeMessage(decodedText, code);
            console.log('Original=>', encodedText);
        },5000);
    }
    catch(err){
        throw err;
    }

}


run()
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err.message));