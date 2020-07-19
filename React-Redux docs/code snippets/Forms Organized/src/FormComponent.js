import React from 'react'

function FormComponent(props){
    
        return(
            <form>
                <label>First name</label>
                <input type = "text" name="fname" value={props.data.fname} onChange={props.handleChange}></input>
                <br />

                <label>Last name</label>
                <input type = "text" name="lname" value={props.data.lname} onChange={props.handleChange}></input>
                <br />

                <label>Age</label>
                <input type = "text" name="age" value={props.data.age} onChange={props.handleChange}></input>
                <br />

                <label>
                <input type = "radio" name="gender" value="male" checked={props.data.gender==="male"} onChange={props.handleChange} /> Male
                </label>
                <label>
                <input type = "radio" name="gender" value="female" checked={props.data.gender==="female"} onChange={props.handleChange} /> Female
                </label>
                <br />

                <label>Destination: </label>
                <select value={props.data.destination} name="destination" onChange={props.handleChange}>
                    <option value="germany">germany</option>
                    <option value="france">france</option>
                    <option value="USA">USA</option>
                </select>
                <br />

                <label>
                    <input type="checkbox" name="isvegi" onChange={props.handleChange} checked={props.data.isvegi}/> vegiterian
                </label>
                <label>
                    <input type="checkbox" name="iskosher" onChange={props.handleChange} checked={props.data.iskosher}/> kosher
                </label>
                <label>
                    <input type="checkbox" name="islocto" onChange={props.handleChange} checked={props.data.islocto}/> loctofree
                </label>
            </form>
        )
}

export default FormComponent