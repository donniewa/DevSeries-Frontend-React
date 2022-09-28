import React, { useMemo } from 'react';

export default function Table({ data, useKey = 'id' }) {
  const keys = useMemo(() => Object.keys(data[0]), [data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <Headers keys={keys} />
          </tr>
        </thead>
        <tbody>
          <Rows keys={keys} data={data} useKey={useKey} />
        </tbody>
      </table>
    </div>
  );
}

const Headers = ({ keys }) => keys.map((key) => <th key={key}>{key.toUpperCase()}</th>);
const Rows = ({ keys, useKey, data }) =>
  data.map((row) => {
    const key = row[useKey];
    return (
      <tr key={key}>
        <Row key={key} keys={keys} data={row} />
      </tr>
    );
  });

const Row = ({ keys, data }) =>
  keys.map((key, index) => <td key={`${index}-${data[key]}`}>{formatData(data[key])}</td>);

const formatData = (data) => {
  if ('boolean' === typeof data) {
    if (Boolean(data) === false) {
      return <>&#128683;</>;
    } else return <>&#9989;</>;
  } else return data;
};
