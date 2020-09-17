import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

function Create() {
  const [field, setField] = useState({});
  useEffect(() => {
    fetch(" http://localhost/api/get_form.php")
      .then((response) => response.json())
      .then((form) => {
        setField(form.data.fields[0]);
      });
  }, []);

 
  var input_fields=[]
  var name = [];

  for (const property in field) {
    if (field.hasOwnProperty(property)) {
      var key = field[property];
     

      name.push(property);
      var individual ={label: key.title, 
                      name:property,
                      type:key.type, 
                      value:key.value,
                      required:key.required,
                      validate:key.validate,
                      read_only:key.readonly,
                      html_attr:key.html_attr,
                      options:key.options,
                     default:key.default }
                    
      input_fields.push(individual)
    }
  }
  console.log(input_fields)
  return (
    <div>
      <Form>
        {input_fields.map((field)=>
        <FormGroup>
        <Label>{field.label}</Label>
        <Input
          name={field.namel} 

          value={field.value}
          type={field.type}
          id={field.html_attr.id}
          className={field.html_attr.class}
          readOnly={field.read_only}
          // data-something={field.html_attr.data-something}
          required={field.required}
          // default={field.default}
          >
             {field.options && field.options.map((option)=>
            <option>{option.label}</option>)}
          </Input>
         
            
           
       
        
      </FormGroup>
        )}
        
      </Form>
    </div>
  );
}

export default Create;
