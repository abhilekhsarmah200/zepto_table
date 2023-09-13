import React from 'react';

const headJson = [
  {
    columnId: 'name',
    columnName: 'User Name',
  },
  {
    columnId: 'add',
    columnName: 'Address',
  },
  {
    columnId: 'state',
    columnName: 'State',
  },
];

const bodyJson = [
  {
    name: 'Abhilekh',
    add: 'Peoli Nagar',
    state: 'Assam',
  },
  { name: 'Abhi', add: 'Banglore', state: 'Banglore' },
  { name: 'Abhishek', add: 'Pune' },
  { name: 'Daniel', add: 'Goa', state: 'Goa' },
  { name: 'Bob', add: 'Dibrugarh', state: 'Assam' },
  { name: 'Bisnuai', add: 'Khowang', state: 'Assam' },
];

export default function Table() {
  // const tableProperties = [
  //   {
  //     Name: 'Abhilekh',
  //     Address: 'Peoli Nagar',
  //     State: 'Assam',
  //   },
  //   { Name: 'Abhi', Address: 'Banglore', State: 'Banglore' },
  //   { Name: 'Abhishek', Address: 'Pune' },
  //   { Name: 'Daniel', Address: 'Goa', State: 'Goa' },
  //   { Name: 'Bob', Address: 'Dibrugarh', State: 'Assam' },
  //   { Name: 'Bisnuai', Address: 'Khowang', State: 'Assam' },
  // ];

  const header = Object.keys(headJson[0]);

  // get table heading data
  const ThData = () => {
    return (
      <>
        {headJson.map((column) => (
          <th
            className='border border-slate-600 text-white p-2 bg-violet-400'
            key={column.columnId}
          >
            {column.columnName}
          </th>
        ))}
      </>
    );
  };

  // get table row data
  const tdData = () => {
    return bodyJson.map((body, index) => (
      <tr key={index}>
        {headJson.map((header) => (
          <td
            className='text-center border-collapse border rounded-xl border-slate-500'
            key={header.columnId}
          >
            {body[header.columnId]}
          </td>
        ))}
      </tr>
    ));
  };
  return (
    <div className='flex justify-center my-10 mx-5'>
      <table className='border-collapse border w-full rounded-xl border-slate-500'>
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody className='border border-slate-700'>{tdData()}</tbody>
      </table>
    </div>
  );
}
