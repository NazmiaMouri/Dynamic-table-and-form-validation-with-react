import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

function Create() {
  var form_field = [];
  const [field, setField] = useState({});
  const [input_value, setInput_value] = useState({
    id:"",
    user_name: "",
    user_email: "bgudtrsy",
    user_gender: "",
    detail: "",
  });

  var name
  useEffect(() => {
    fetch(" http://localhost/api/get_form.php")
      .then((response) => response.json())
      .then((form) => {
        setField(form.data.fields[0]);
      });
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };

  for (const property in field) {
    if (field.hasOwnProperty(property)) {
      var key = field[property];
     
      //  //    key =        html_attr: {class: "cls0 cls2", id: "the-id-2"}
      //                     required: true
      //                     title: "Email"
      //                     type: "email"
      //                     validate: "email|max:200"
      //                     value: ""
      // property = id , // property = user_name
      var individual = {
        label: key.title,
        name: property,
        type: key.type,
        value: key.value,
        required: key.required,
        validate: key.validate,
        read_only: key.readonly,
        html_attr: key.html_attr,
        options: key.options,
        default: key.default,
      };
      form_field.push(individual);
    }
  }

  
const form=form_field.map((field) => {
   name = field.name 
   console.log(name)
  console.log(input_value[name])
  return(
    <FormGroup>
    <Label>{field.label}</Label>
    <Input
      name={field.name}
      value={input_value[name]}
      type={field.type}
      id={field.html_attr.id}
      className={field.html_attr.class}
      readOnly={field.read_only}
     
      required={field.required}
     
      onChange={(e) => {
        setInput_value({ [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);
      }}
    >
      {field.options &&
        field.options.map((option) => <option>{option.label}</option>)}
    </Input>
  </FormGroup>

  )
  
      
      }
)


  return (
    <div>
      <Form onSubmit={(values) => handleSubmit(values)}>
        {form}
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
