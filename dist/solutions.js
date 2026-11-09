"use strict";
//? --------------------------------------- Problem 1: ---------------------------------------
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
// console.log(multiplyValue(10))
//? --------------------------------------- Problem 2: ---------------------------------------
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }
}
function formatCoordinate(Location) {
    const [latitude, longitude, locationName] = Location;
    return (`Location: ${locationName} (${latitude} , ${longitude}) `);
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))
//? --------------------------------------- Problem 4 ---------------------------------------
function concatenateArrays(...array) {
    return array.flat();
}
function getPopularCourses(courses, minStudents) {
    const popularCourse = courses.filter((course) => {
        return course.students >= minStudents && course.isPublished === true;
    });
    return popularCourse;
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
// console.log(getPopularCourses(courses, 80))
//? ---------------------------------------   Problem 6 ---------------------------------------
function pluckValues(items, key) {
    return items.map((item) => (item[key]));
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
// console.log(pluckValues(users,"name"))
//? ---------------------------------------   Problem 7 ---------------------------------------
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name,
            this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, and his Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department} and his name ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails())
// console.log(manager.getRoleInfo())
//? ---------------------------------------   Problem 8 ---------------------------------------
async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}
async function test() {
    try {
        const result = await validateAgeAsync(20);
        console.log(result);
    }
    catch (error) {
        console.error(error.message);
    }
}
test();
