
Core differences between type aliases and interface in TypeScript?


## 1. Main difference is interface. 

Interface is like object of structure that define the typeof will be. Like from argument what kind of value is coming. Where we can protechted. For an example 

interface User {
    id: number;
    name: string;
}

On the other hand using type alias we can create diffrent type of Data type 
like : 
Primitive type,
example: type ID = number

Union Type,
example: type Role= "admin" | "member"


Tuple,
 example: type Coordinate = [number, number]

Literal Type
type User  = {
    id: number;
    name: string;
}

That's means interface can't directly determine primitive or union type. but type alias can do. 



## 2. Interface and type alias both can connected structure with structure. But syntax is different. 

for an example interface can extend: 
interface Animal {
    name: string;

}
interface cat extents Animal {
    color: string;
}



For type alias we use intersection.
Example: type vehicle = {
    brand: string;
}

type car = Vehicle & {
    model : string;
}
Here inside car type added vehicle and own model property;



## 3. Interface and type alice declaration merging
For interface can create multiple name typescript will automatically merge the properties. 
interface User{
    name: string;

}
interface User {
    age: number; 
}

but type alice this type of task can't create.  Tha's means  Type alias can't redeclare type name. 


## 4. This time we can use interface
- Interface we can use when define Object of structure 
- Create class of contract 
- To create public API Model 
- If needed Declaration Merging

this time we can use type alias
- To create union type
- To create primitive or tuple, literal type 
