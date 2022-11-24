const add = (n) => (n + 10);
add(9);

const memoizedAdd = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('fetching from cache');
            return cache[n];
        } else {
            console.log('calculating result');
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }
}

const newAdd = memoizedAdd();
console.log(newAdd(9));
console.log(newAdd(9))