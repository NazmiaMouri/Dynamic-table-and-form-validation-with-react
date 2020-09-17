import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';

function List() {
  const [header, setHeader] = useState({});
  const [row, setRow] = useState([]);

  useEffect(() => {
    fetch("http://localhost/api/list.php")
      .then((response) => response.json())
      .then((table) => {
        setHeader(table.data.headers[0]);
        setRow(table.data.rows);
      });
  }, []);

  var head = [];
  var head_key = [];

  for (const property in header) {
    if (header.hasOwnProperty(property)) {
      var key = header[property];

      head_key.push(property);

      head.push(key.title);
    }
  }

 

  return (
    <div className='row'>
      <h1 >List</h1>
      <Link to='/createform' className=" btn btn-primary  ml-auto mr-10" >
              <i className="fa fa-plus  fa-lg"  ></i> Create New</Link>

              <div className="table-responsive">
      

      <table className="table table-striped table-dark hover">
        <thead>
          <tr>
            {head.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {row.map((row, index) => (
          <tbody>
            <tr key={index}>
              {head_key.map((item) => (
                row[item] ?
                  <td>{row[item]}</td> :
                  <td > - </td> 
                 
                
              ))}
            </tr>
          </tbody>
        ))}
      </table>
    </div>        
    </div>
    
  );
}

export default List;
