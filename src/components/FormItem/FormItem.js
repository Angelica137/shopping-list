import React from "react";
import styled from "styled-components";

const FormItemWrapper = styled.div`
  sisplay: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 2%;
`;

const Label = styled.label`
  display: black;
  font-weight: bold;
  padding: 10px 0px;
`;

const Input = styled.input`
  flex-basis: 60%;
  border: 0;
  font-size: inherit;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightGrey;
`;

const FormItem = ({
  id,
  label,
  type = "text",
  palceholder = "",
  value,
  handleOnChange,
}) => (
  <FormItemWrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input
      type={type}
      name={id}
      id={id}
      palceholder={placeholder}
      value={value}
    />
  </FormItemWrapper>
);

export default FormItem;
