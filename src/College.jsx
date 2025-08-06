const College = ({data}) =>{
    
    return (
        <div>
              <ul>
                <h1>College Name :</h1> 
                <li>
                  {data.name}
                </li>
                <h1>Student :</h1> 
                {
                data.students.map((student)=>(
                    <li>
                        {student.name}
                    </li> 
                ))
                }
                 
              </ul>

        </div>
)
}
export default College;