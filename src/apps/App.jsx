import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../../Componets/Index";
import { TrackingContext } from "../../Conetxt/Tracking";

function App() {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,
  } = useContext(TrackingContext);

  // STATE VARIABLE
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfilem, setOpenProfile] = useState(false);
  const [startprofile, setStartprofile] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);

  //   DATA STATE VARIABLE
  const [allShipmentdata, setAllShipmentdata] = useState();

  useEffect(() => {
    const getCampaignsData = getAllShipment();

    return async () => {
      const allData = await getCampaignsData;
      setAllShipmentdata(allData);
    };
  }, []);

  return (
    <>
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
      />
      <Table />
      <Form />
      <Profile />
      <CompleteShipment />
      <GetShipment />
      <StartShipment />
    </>
  );
}

export default App;
