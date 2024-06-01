const text = ["Albert Einstein: Life is like riding a bicycle. To keep your balance, you must keep moving.",
"Helen Keller: Life is either a daring adventure or nothing at all.",
"John Lennon: Life is what happens to you while you’re busy making other plans.",
"Ralph Waldo Emerson: The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
"Maya Angelou: My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."];


const generate = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const codeRunner = () => {
    let user = true;
    if (user === true){
        console.log("User is running the code");
        console.log(generate(text));
    }else{
        return false;
    }
}

codeRunner();