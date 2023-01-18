import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import moment from "moment";

function BankDetails() {
  let apiBaseURL = "http://216.48.182.176:4000";
  //let apiBaseURL = "http://216.48.182.176:4000";

  const [data, setData] = useState([]);
  const columns = [
    { title: "Sl No", field: "id" },
    //{ title: "User Name", field: "actual_name" },
    { title: "EmailId", field: "emailId" },
    { title: "Actual_name", field: "actual_name" },
    { title: "ifsc_code", field: "ifsc_code" },
    { title: "AccountNumber", field: "account_number" },
    // { title: "UPI Address", field: "upi_address" },

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
    // { title: "Amount ", field: "amount" },

    // { title: " Date", field: "created" },

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
      url: `${apiBaseURL}/user/getBank`,
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
      <div className="col-12 col-sm-6 col-md-3">Banks History</div>
      <div className="card card-outline card-info">
        <MaterialTable title="Bank Records" data={data} columns={columns} />
      </div>
    </>
  );
}
export default BankDetails;
