import React, { Component } from 'react';
import Table from '../Table/DynamicTable';
import './GetOnLinePosts.css';
import useFetch from '../../hooks/useFetch';

/**
 * Will return posts from the given url and render a dynamic table
 */
const GetOnlinePosts = ({ url, useKey = undefined }) => {
  const { data, error } = useFetch(url);

  if (error) {
    return <div>Error in loading</div>;
  } else if (data) {
    return (
      <div>
        <Table data={data} useKey={useKey} />
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
};

export default GetOnlinePosts;
