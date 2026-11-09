//? --------------------------------------- Problem 1: ---------------------------------------

function multiplyValue(value:number , multiplier : number = 2) : number{
    return  value * multiplier;
}
// console.log(multiplyValue(10))

//? --------------------------------------- Problem 2: ---------------------------------------
function processInput(value: string |number | boolean){
    if(typeof value === "string"){
       return  value.trim().toLowerCase()
    }else if(typeof value === "number"){
        return  value * 10
    }else if(typeof value === "boolean") {
       return value ? "Active" : "Inactive"
    }
    
}

//? --------------------------------------- Problem 3 ---------------------------------------
type tCoordinate = readonly [number, number, string];
function formatCoordinate(Location: tCoordinate) : string {
    const [latitude, longitude, locationName] = Location;
    
    return (`Location: ${locationName} (${latitude} , ${longitude}) `)

}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))

//? --------------------------------------- Problem 4 ---------------------------------------
function concatenateArrays<T>(...array: T[][]){
    return array.flat()
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]))

//? ---------------------------------------   Problem 5 ---------------------------------------
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {

    const popularCourse =  courses.filter((course) => {
        return course.students >= minStudents && course.isPublished === true
    })

    return popularCourse
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

// console.log(getPopularCourses(courses, 80))


//? ---------------------------------------   Problem 6 ---------------------------------------

function pluckValues<T,K extends keyof T>(items: T[], key: K):T[K][]{
    return items.map((item) => (
        item[key]
    ))
}


const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];


// console.log(pluckValues(users,"name"))


//? ---------------------------------------   Problem 7 ---------------------------------------

class Employee {
  protected name: string;
  private baseSalary : number;

  constructor(name: string, baseSalary : number) {
    this.name = name,
    this.baseSalary  = baseSalary
  }

   getDetails () {
    return `Employee: ${this.name}, and his Base Salary: ${this.baseSalary}`
  }

}

class Manager extends Employee {
    private department : string;

    constructor(name: string, baseSalary : number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department} and his name ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails())
// console.log(manager.getRoleInfo())


//? ---------------------------------------   Problem 8 ---------------------------------------
async function validateAgeAsync(age:number) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if(age >= 18){
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000)
        }else{
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}

async function test () {
    try{
        const result = await validateAgeAsync(20);
        console.log(result)
    }catch(error: any){
        console.error(error.message)
    }
}

test ()


