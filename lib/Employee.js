class Employee {
    constructor (name, empID, email) {
        this.name = name;
        this.empID = empID;
        this.email = email;
    }
    // getting data from user input to prompts 
    getName () {
        return this.name;
    }

    getempID () {
        return this.id;
    }   

    getEmail () {
        return this.email;
    }

    getTitle () {
        return 'Employee'; 
    }
};


module.exports = Employee; 