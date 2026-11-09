
# How generics and promise work in typescript


## First I'm telling how generics works?
Generic is a reuseable or dynamic type. It's generally start with angle bracket and inside can anything but developer standard is T <T>. 

for an example: 
    if i need to revice any value from param. The condition is any type of value will come but here i can't use "any". Cause any has several issues
    that time what will do for better type safety?

    Instend of "any" we can use Generic for reuseable code and type script will automatically track the type and keep safety

const wrapInArray = <T>(value: T) : T[] => {
    return [value];
}
const stringArr = wrapInArray("AVC)


## Now I'm telling how promise works?
Promise is anync work. What will be in future process, pending, rejected ?

    When we add fetch() from outside data and call res.json() that time typescript can't know what data will come from backend. That's why by default it set as "any" type. 

    Using Promise<T> is a by default generic type. We can set return type as generic interface. Then we tell to api response that when promise resolved then what type of data response will return. 