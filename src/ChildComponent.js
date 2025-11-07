const ChildComponent = ({name, matric, course}) => {
    return (
        <div>
            <h2>Hello, {name}</h2>
            <p>My matric number is {matric}</p>
            <p>From the department of {department}</p>
        </div>
    )
}

export default ChildComponent;