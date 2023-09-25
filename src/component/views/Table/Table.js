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
  {
    columnId: 'email',
    columnName: 'Email',
    responsePath: 'userEmail.email',
  },
  {
    columnId: 'phone',
    columnName: 'Ph. No.',
    responsePath: 'userContact.phone',
  },
];

const bodyJson = [
  {
    name: 'Abhilekh',
    add: 'Peoli Nagar',
    state: 'Assam',
    userContact: {
      phone: '848765778',
    },
    userEmail: {
      email: 'abh@ss.com',
    },
  },
  {
    name: 'Abhi',
    add: 'Banglore',
    state: 'Banglore',
    userContact: null,
    userEmail: null,
  },
  { name: 'Abhishek', add: 'Pune', userContact: null, userEmail: null },
  {
    name: 'Daniel',
    add: 'Goa',
    state: 'Goa',
    userContact: null,
    userEmail: null,
  },
  {
    name: 'Bob',
    add: 'Dibrugarh',
    state: 'Assam',
    userContact: {
      phone: '3434343434',
    },
    userEmail: {
      email: 'der@ss.com',
    },
  },
  {
    name: 'Bisnuai',
    add: 'Khowang',
    state: 'Assam',
    userContact: null,
    userEmail: null,
  },
];

export default function Table() {
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

  const pathObject = Object.values(headJson?.map((item) => item?.responsePath));

  console.log({ ...pathObject });

  // get table row data
  const tdData = () => {
    return bodyJson.map((body, index) => (
      <tr key={index}>
        {headJson.map((header) => (
          <td
            className='text-center border-collapse border rounded-xl border-slate-500'
            key={header.columnId}
          >
            {header?.responsePath
              ? header.responsePath
                  .split('.')
                  .reduce((obj, key) => (obj ? obj[key] : ''), body)
              : body[header.columnId]}
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
