import { useState } from 'react';
export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const change = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    // if it's a field that contains choices, convert into array.
    if (fieldName.includes('choices')) {
      const choicePosition = Number(fieldName.charAt(fieldName.length - 1));
      const newChoices = [...form['choices']];
      newChoices[choicePosition] = {
        id: choicePosition + 1,
        choice: fieldValue,
      };
      setForm({
        ...form,
        choices: newChoices,
      });
    } else {
      setForm({
        ...form,
        [event.target.name]:
          event.target.type === 'number'
            ? Number(event.target.value)
            : event.target.value,
      });
    }
  };

  const reset = () => setForm(initialForm);

  return [form, change, reset];
};
