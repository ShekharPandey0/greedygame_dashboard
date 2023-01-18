import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import moment from "moment";

function UPIHistory() {
  let apiBaseURL = "http://216.48.182.176:4000";
  //let apiBaseURL = "http://216.48.182.176:4000";

  const [data, setData] = useState([]);
  const columns = [
    { title: "Sl No", field: "id" },
    { title: "User Name", field: "actual_name" },
    { title: "EmailId", field: "emailId" },

    /*  {
      title: "User Name",
      render: (rowData) =>
        rowData.username ? rowData.username : `Guest${rowData.user_id}`,
    },
    */ // { title: "Order ID", field: "order_id" },
    /*  {
      title: "Amount",
      render: (rowData) => `Rs ${rowData.txn_amount} ${rowData.added_type}`,
    },
    */
    { title: "UPI ID ", field: "upi_address" },

    { title: " Confirm UPI ID", field: "upi_address" },

    /*    {
      title: "Transaction Date",
      render: (rowData) =>
        rowData.txn_date
          ? moment(rowData.txn_date).format("YYYY-M-D h:mm:ss")
          : "Not login yet",
      filtering: true,
    },
  */
  ];
  //get Agents
  const getReports = async () => {
    await axios({
      method: "GET",
      url: `${apiBaseURL}/user/getUPI`,
      // data: user,
      // headers: {"Authorization" : `Bearer ${authToken}`}
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setData(response.data.data);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getReports();
  }, []);

  return (
    <>
      <div className="col-12 col-sm-6 col-md-3">UPI History</div>
      <div className="card card-outline card-info">
        <MaterialTable title="UPI Records" data={data} columns={columns} />
      </div>
    </>
  );
}
export default UPIHistory;
