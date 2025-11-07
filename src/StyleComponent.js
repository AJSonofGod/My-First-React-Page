function StyleComponent () {

let age = 21;
const name = "Ajayi Joshua A.";
const department = "Information Technology";
const matricNo = "24/2987";
const NameStyle = {
        color: "red",  
    }

const DeptStyle = {
        color: "black",  
    }

const MatricStyle = {
        color: "blue", 
    }

return ( 
        <div>
            <p style = {NameStyle}>My name is <b>{name}</b></p>
            
            <p style = {DeptStyle}>From the department of <b>{department}</b> </p>
            
            <p style = {MatricStyle}>My Matric no. is <b>{matricNo}</b></p>
        </div>
    );
}

const StyleComponent = () => {

    const Style = {
        color: "red", 
        backgroundColor: "black", 
        textAlign: "justify"
    }

    return (
        <div>
            <h2 style = {Style}>This is an header</h2>
        </div>
    );
};

export default StyleComponent;

