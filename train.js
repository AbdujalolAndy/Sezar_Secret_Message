const alphabet = "abcdefghijklmnopqrstuvwxyz";
let code = 100;
const message = 'hello this is me';
if(code>alphabet.length || code<alphabet.length*-1){
    code%=alphabet.length;
    console.log("code: ",code);
}

async function decodedMessage(message, code){
    try{
        if(message === ''){
            throw new Error('Message is empty');
        }else{
            const words = message.split(' ');
            result = []
            for(let word of words){
                let characters = word.split('');
                let decodedWord = '';
                for(let letter of characters){
                    let index = alphabet.indexOf(letter)+code;
                    if(index<0){
                        index += (alphabet.length-1);
                    }else if(index>(alphabet.length-1)){
                        index=index-(alphabet.length-1);
                    }
                    decodedWord += alphabet[index];
                }
                result.push(decodedWord);
            }
            return result.join(' ');
        }
    }
    catch(err){
        throw err;
    }

}

async function encodeMessage(decodedText, code){
    const message = decodedText;
    return await decodedMessage(message, code);
}
 

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



