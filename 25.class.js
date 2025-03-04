 //syntax

// class class-name{
// properties,functionalities
// }
class employee {
  setemployee(id, name, desg, salary) {
    (this.id = id),
      (this.name = name),
      (this.desg = desg),
      (this.salary = salary);
  }
  printemployee() {
    console.log(this.id);
  }
}

// Create object
// object_name=new class-name()

emp = new employee();
emp.setemployee(1001, "dim", "engg", "12345");
emp.printemployee();

// create class for students(roll no,name,grade,result)
// print student name,roll no,pass/failed

class students {
  setstudent(rollno, name, grade, result) {
    (this.rollno = rollno),
      (this.name = name),
      (this.grade = grade),
      (this.result = result);
  }
  printstudent() {
    console.log(this.name, this.rollno, this.result, this.grade);
  }
}
e = new students();
e.setstudent(234, abina, pass, A);
e.printstudent();
