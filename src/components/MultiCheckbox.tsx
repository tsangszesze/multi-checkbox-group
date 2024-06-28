import { useMultiCheckbox } from "../hooks/useMultiCheckbox";
import { CheckboxOption } from "../types/Checkbox";
import { Checkbox } from "./Checkbox";
import "../styles/MultiCheckbox.css";

interface MultiCheckboxProps {
  options: CheckboxOption[];
  defaultValues?: string[];
  onChange: (values: string[]) => void;
  columns: number;
}

export const MultiCheckbox = (props: MultiCheckboxProps) => {
  const { options, defaultValues, onChange, columns } = props;

  const { selectedValues, toggleCheckbox, toggleSelectAll } = useMultiCheckbox({
    options,
    onChange,
    defaultValues,
  });

  return (
    <div
      id="multi-checkbox"
      style={{
        gridTemplateColumns: `repeat(${options.length ? columns : 1}, 1fr)`,
      }}
    >
      {options.length ? (
        <>
          <Checkbox
            label={"select All"}
            onCheck={toggleSelectAll}
            isChecked={selectedValues.length === options.length}
          />
          {options.map((option, i) => (
            <Checkbox
              key={i}
              label={option.label}
              onCheck={() => toggleCheckbox(option.value)}
              isChecked={selectedValues.includes(option.value)}
            />
          ))}
        </>
      ) : (
        "No option provided"
      )}
    </div>
  );
};
