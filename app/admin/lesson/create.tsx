import { SimpleForm, Create, required, TextInput, ReferenceInput, NumberInput } from "react-admin";

const LessonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <ReferenceInput
          source="lessonId"
          reference="units"  
        />
        <NumberInput
          source="order"
          validate={[required()]}
          label="Order"
        />
      </SimpleForm>
    </Create>
  );
};

export default LessonCreate;
