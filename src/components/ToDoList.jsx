import React from 'react';
import { ListGroup } from 'react-bootstrap/esm';
import { useSelector } from 'react-redux';
import _uniqueId from 'lodash/uniqueId';

import { tasksSelector } from '../slices/tasksSlice';
import ToDoItem from './ToDoItem';
import { filterInfoSelector } from '../slices/filterInfoSlice';

const ToDoList = () => {
  const { nowShowing } = useSelector(filterInfoSelector);
  const tasksForRender = useSelector(tasksSelector.selectAll)
    .filter((task) => {
      switch (nowShowing) {
        case 'completed':
          return task.completed === true;
        case 'active':
          return task.completed === false;
        default:
          return true;
      }
    });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mt-1">
          <ListGroup>
            {tasksForRender.map((task) => (
              <ToDoItem key={_uniqueId('key-')} value={task} />
            ))}
          </ListGroup>
        </div>
      </div>
    </div>

  );
};

export default ToDoList;
