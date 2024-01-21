
// for LOOP
const students = [
    {
        name: 'Mike',
        lastname: 'Johnson',
        age: 15,
        course: 'History'
    },
    {
        name: 'Susy',
        lastname: 'Addams',
        age: 15,
        course: 'Hostelry'
    },
    {
        name: 'Will',
        lastname: 'Smith',
        age: 15,
        course: 'Drama'
    },
    {
        name: 'Julia',
        lastname: 'Roberts',
        age: 15,
        course: 'Art'
    }
]

for (let i = 0; i < students.length; i++){
    console.log(students[i])
}

// forEach() --> SAME output
students.forEach(function(student){
    console.log(student)
})
/*returns
{ name: 'Mike', lastname: 'Johnson', age: 15, course: 'History' }
{ name: 'Susy', lastname: 'Addams', age: 15, course: 'Hostelry' }
{ name: 'Will', lastname: 'Smith', age: 15, course: 'Drama' }
{ name: 'Julia', lastname: 'Roberts', age: 15, course: 'Art' }
*/

// EXAMPLE 2 - 2 params
students.forEach(function(student, index){
    console.log(student, index)
})
/*returns
{ name: 'Mike', lastname: 'Johnson', age: 15, course: 'History' } 0
{ name: 'Susy', lastname: 'Addams', age: 15, course: 'Hostelry' } 1
{ name: 'Will', lastname: 'Smith', age: 15, course: 'Drama' } 2
{ name: 'Julia', lastname: 'Roberts', age: 15, course: 'Art' } 3
*/

// EXAMPLE 3 - arrow funct.
students.forEach(student => {console.log(student)});
/*returns
{ name: 'Mike', lastname: 'Johnson', age: 15, course: 'History' }
{ name: 'Susy', lastname: 'Addams', age: 15, course: 'Hostelry' }
{ name: 'Will', lastname: 'Smith', age: 15, course: 'Drama' }
{ name: 'Julia', lastname: 'Roberts', age: 15, course: 'Art' }
*/
