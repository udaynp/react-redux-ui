import { useState } from 'react';
export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const change = (event, allowMultiple) => {
    const fieldValue = event.target.value;
    const choicePosition = fieldValue - 1;
    const newChoices = [...form];

    if (allowMultiple) {
      // newChoices[choicePosition] = { choice: fieldValue };
      // setForm({
      //   ...form,
      //   choices: newChoices,
      // });
      // console.log('no single ladie aka calling multiple');
    } else {
      const currentChoice = newChoices[choicePosition];
      const updatedChoice = currentChoice
        ? { choiceId: fieldValue, checked: !currentChoice.checked }
        : { choiceId: fieldValue, checked: true };
      setForm([updatedChoice]);
    }
  };

  const reset = () => setForm(initialForm);

  return [form, change, reset];
};
