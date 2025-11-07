const MyFile = () => {

    const students = [
        {id:1, name: "Ada"},
        {id:2, name: "Josh"},
        {id:3, name: "Eze"},
        {id:4, name: "Ada"},
    ]
    
    return (
        <>
            <h1>Names of Students</h1>
            <ul>
                {students.map(s => (<li key={s.id}>{s.name}</li>))}
            </ul>
        </>
    );
}

export default MyFile;