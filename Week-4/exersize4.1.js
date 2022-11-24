class CustomPromise {
    constructor(fn) {
        this.CustomPromiseState = CustomPromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFns = [];
        this.catchFns = null;
        this.resolvedData = null;
        fn(this.resolver, this.rejector);
    }
}

resolver(resolvedData) 
{ 
    if (!this.CustomPromiseState === CustomPromiseState.PENDING) {
        return ;
    }
    this.CustomPromiseState = CustomPromiseState.RESOLVED;
    while (this.thenFns.lengh) {
        const thenFn = this.thenFns.shift();
        this.resolvedData = thenFn( this.resolvedData || resolvedData );
    }
}


rejector( rejectedData )
{
    if (this.CustomPromiseState === CustomPromiseState.PENDING ) {
        this.catchFn && this.catchFn(rejectedData);
    }
    this.CustomPromiseState = CustomPromiseState.REJECTED ;
}

then(thenFn) 
{
    this.thenFns.push(thenFn);
    return this;
}

catch(catchFn) 
{
    this.catchFn = catchFn ;
    return this;
}

const getNumber = () =>
   new Promise ((res, rej) => {
       const randomNumberr = 10;
       setTimeout(() => { res(randomNumber); }, random * 10); });

const incrementBy = (originalValue, incrementQuantity = 1) => {
           return originalValue + incrementQuantity ;
       };

const clickHandler = () => {
    display('Loading..');
    const numberPromise = getNumber();
    numberPromise
       .then((val) => incrementBy(val, 10))
       .then((val) => incrementBy(val, 20))
       .then((val) => incrementBy(val, 30))
       .then(display)
       .catch(display);

};

