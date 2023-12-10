import { useDebounceFn } from "ahooks";
import { ChangeEvent, useState } from "react";

export const useSearch = () => {
  const [value, setValue] = useState<string>("");
  const { run: handleChangeSearch } = useDebounceFn(
    (event: ChangeEvent<HTMLInputElement>) => {
      const validateData = event.target.value.replace(/\s+/g, " ").trim();
      setValue(validateData);
    },
    { wait: 500 }
  );

  return { handleChangeSearch, value };
};