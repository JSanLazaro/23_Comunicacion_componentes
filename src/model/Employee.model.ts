export class Employee{
    static _id:number = 0;
    id:number;
    name:string;
    lastName:string;
    position:string;
    salary:number;
    constructor(name:string,lastName:string,position:string,salary:number){
        this.id = ++Employee._id;
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }
}