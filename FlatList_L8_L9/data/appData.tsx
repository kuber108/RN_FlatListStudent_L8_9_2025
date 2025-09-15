type dataType = {
    id: string; // unique identifier in list
    title: string; // text I want to show in list
  }

  const DATA: dataType[] = [
    {id: '1', title: "First Item"},
    {id: '2', title: "Second Item"},
    {id: '3', title: "First Item"},
    {id: '4', title: "First Item"}
  ]

  export {dataType, DATA};