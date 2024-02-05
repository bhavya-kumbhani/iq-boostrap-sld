import React from "react";

const ShowTable = ({ headers, data, onRowClick }) => {
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Sr No.</th>
            {headers.map((header, index) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            <>
              {data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>@{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td>{item.dob}</td>
                    <td>
                      <button onClick={() => onRowClick(item)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => onRowClick(item)}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <div>No data found</div>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTable;
