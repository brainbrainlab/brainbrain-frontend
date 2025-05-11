interface Window {
  daum: {
    Postcode: new (config: {
      oncomplete: (data: {
        address: string;
        addressType: string;
        bname: string;
        buildingName: string;
        apartment: string;
        zonecode: string;
      }) => void;
    }) => {
      open: () => void;
    };
  };
}
