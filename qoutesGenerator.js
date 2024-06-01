const quotes = ['Albert Einstein: Life is like riding a bicycle. To keep your balance, you must keep moving.', 
'Helen Keller: Life is either a daring adventure or nothing at all.','John Lennon: "Life is what happens to you while you’re busy making other plans.',
'Ralph Waldo Emerson: The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.',
'Oprah Winfrey: The biggest adventure you can ever take is to live the life of your dreams.'
];

const ascci = [
`__      __             __     .__     .___
/  \    /  \___________|  | __ |  |__ _____ _______  __| _/
\   \/\/   /  _ \_  __ \  |/ / |  |  \\__  \\_  __ \/ __ | 
 \        (  <_> )  | \/    <  |   Y  \/ __ \|  | \/ /_/ | 
  \__/\  / \____/|__|  |__|_ \ |___|  (____  /__|  \____ | 
       \/                   \/      \/     \/           \/`,
       `  ___                         _   
       | _ ) ___   ____ __  __ _ _ _| |_ 
       | _ \/ -_) (_-< '  \/ _ | '_|  _|
       |___/\___| /__/_|_|_\__,_|_|  \__|`,
       `_   _   _   _     _   _   _   _     _   _   _   _  
       / \ / \ / \ / \   / \ / \ / \ / \   / \ / \ / \ / \ 
      ( l | o | v | e ) ( y | o | u | r ) ( l | i | f | e )
       \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/`,]

const generate = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const user = () => {
    let user = true;

    if (user === true){
        console.log("User initialized");
        console.log(generate(quotes));
        console.log(generate(ascci));
    }else{
        return false;
    }
}

user();