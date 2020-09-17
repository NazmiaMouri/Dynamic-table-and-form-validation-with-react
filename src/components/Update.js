import React,{ useState, useEffect } from 'react'

function Update() {
    useEffect(() => {
        fetch("  http://localhost/api/submit_form.php")
          .then((response) => response.json())
          .then((form) => {
            // setField(form.data.fields[0]);
          });
      }, []);
    return (
        <div>
            
        </div>
    )
}

export default Update
   