const getFormData = <TForm>(
  data: FormData,
  key: keyof TForm
): TForm[keyof TForm] => {
  return data.get(key as string) as TForm[keyof TForm];
};

export default getFormData;
