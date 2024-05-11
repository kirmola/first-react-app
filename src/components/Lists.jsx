import React from 'react'

const Lists = () => {
    const data = [
        {
            name: "Aman",
            class: "BCA",
            subject: "Python",
            marks: 100
        },
        {
            name: "varun",
            class: "CMON",
            subject: "Java",
            marks: 90
        },
        {
            name: "John",
            class: "BCA",
            subject: "PHP",
            marks: 80
        },
        {
            name: "muller",
            class: "CSE",
            subject: "R",
            marks: 70
        },
    ]
    const lists = data.map(student => {
        return (
            <li className='listitem' key={student.marks}>{student.name} chose {student.subject} with {student.marks}</li>
        )
    })
  return (
    <div>
        Lists
        <div>
            Now we will be creating lists
        </div>
        <ul>
            {lists}
        </ul>
    </div>
  )
}

export default Lists