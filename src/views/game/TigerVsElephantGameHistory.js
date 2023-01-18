import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "../../style/Contact.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
// import { apiBaseURL } from "../../config";
import moment from "moment";
let apiBaseURL = "http://216.48.182.176:4000";
// import { authToken } from "../../authToken";

function TigerVsElephantGameHistory() {
  const [data, setData] = useState([]);

  // get Agents
  const gameReports = async () => {
    await axios
      .get(`${apiBaseURL}/user/TigerVsElephantgetPlayerHistory`)
      .then(function (response) {
        if (response.data.status === 200) {
          setData(response.data.data);
        }
      })
      .catch(function (error) {});
  };

  //get Agents

  const columns = [
    { title: "Serial No", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Room ID", field: "room_id" },
    { title: "Game ID", field: "game_id" },
    { title: "Win Spot", field: "spot" },
    { title: "Win No.1", field: "winNo1" },

    { title: "Win No.2", field: "winNo2" },
    {
      title: "Date & Time",
      render: (rowData) =>
        moment(rowData.created).format("DD-MM-YYYY h:mm:ss "),
    },
  ];

  useEffect(() => {
    gameReports();
  }, []);
  return (
    <>
      <div className="card card-outline card-info">
        <MaterialTable
          title="Game Plays History"
          data={data}
          columns={columns}
          options={{ actionsColumnIndex: -1 }}
        />
      </div>
    </>
  );
}
export default TigerVsElephantGameHistory;
