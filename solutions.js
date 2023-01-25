// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
// Problem 1
const compute_days = (required_length, step, step_back) => {
    // console.log(required_length, step, step_back);
    let days = 0;
    let current_length = 0;
    while(current_length < required_length) {
        current_length += step - step_back;
        days += 1;
    };
    return days;
};

console.log(compute_days(100,50,30));

// Problem 2

const  compute_handshakes = (people_count) => {
    if(people_count == 1)
        return 0;
    return compute_handshakes(people_count-1)+(people_count-1);
};

console.log(compute_handshakes(10));

// Problem 3

const remove_similar_words = (initial_string) => {
    let words = initial_string.split(',');
    return words.reduce((acc, word) => acc.includes(word) ? acc : [...acc, word], []);
};

console.log(remove_similar_words("acb,abc,acb,12,11,11,12,13"));
