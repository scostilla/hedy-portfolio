import { useParams } from "react-router-dom";
import react, { useState } from "react";
import "../App.css";

export const Users = (props) => {
  const [getUser, setUser] = useState([
    { id: 1, userName: "scostilla", name: "Sebastian", lastName: "Costilla" },
    {
      id: 2,
      userName: "javicost",
      name: "Javier",
      lastName: "Costilla Capobianco",
    },
    {
      id: 3,
      userName: "paulicost",
      name: "Paula",
      lastName: "Costilla Capobianco",
    },
  ]);

  return (
    <div>
      <p>
                <h1>LISTADO DE USUARIOS</h1>
                <table className="table">
                    <tr>
                        <th>Nombre de Usuario</th> <th>Nombre</th> <th>Apellido</th>
                    </tr>
                    {getUser.map((user) => (
                            <tr key={user.id}>
                                <td>{user.userName}</td> <td>{user.name}</td> <td>{user.lastName}</td>
                            </tr>
                    ))}
                </table>
            </p>
    </div>
  );
};
