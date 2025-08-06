const Users =({data}) =>{

    return (
        <div style={
            {
                border:"1px solid green",
                padding:"10px",
                margin: "10px",
                width : "400px",
                borderRadius:"10px"
            }
        }>
            <h1>users component</h1>
            <h3> <strong>Name: </strong> {data.name} </h3>
            <h3> <strong>Age: </strong> {data.age} </h3>
        </div>

    )

}
export default Users;