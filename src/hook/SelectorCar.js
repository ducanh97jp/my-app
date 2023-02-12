import { useState } from "react";

function SelectorCar () {
    let [selected, setSelected] = useState({
        Car: "Mercedes S600",
        Color: "Black",
    });
    const handleChange = (e) => {
        setSelected({...selected, [e.target.name]: e.target.value})
}
    return (
      <div>
        <h2>Select your car</h2>
        <table>
          <tr>
            <td>
              <label>Select a car</label>
            </td>
            <td>
              <select name="Car" onChange={(e) =>{handleChange(e)}}>
                <option value="Mercedes S600">Mercedes S600</option>
                <option value="Volvo">Volvo</option>
                <option value="Abarth">Abarth</option>
                <option value="Zenos">Zenos</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Audi">Audi</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Select a color</label>
            </td>
            <td>
              <select name="Color" onChange={(e) =>{handleChange(e)}}>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="White">white</option>
              </select>
            </td>
          </tr>
        </table>
        <b>You selected a {selected.Car} - {selected.Color}</b>
      </div>
    );
}
export default SelectorCar;