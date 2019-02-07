var employees = []

function Employee(fname, lname, jobTitle, salary, status){
    this.firstName = fname
    this.lastName = lname
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status || "Full-Time"
    

    Employee.prototype.printEmployeeForm = function(){
        console.log(this)
    }
}

var dwight = new Employee('Dwight', 'Schroot', 'Assistant To The Regional Manager', '$65000 per year','contract')
var jan = new Employee('Jan', 'Levinston-gould', 'District Manager', '$95000 per year')
var michael = new Employee('Michael', 'Scott', 'Regional Manager', '$75000 per year')
var employees = [dwight, jan, michael]

dwight.printEmployeeForm()
jan.printEmployeeForm()
michael.printEmployeeForm()

console.log(employees)