import React from 'react';
import { NameLabel, Input } from './Filter.styled';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <NameLabel>
      Фильтр по имени
      <Input type="text" value={value} onChange={onChange} />
    </NameLabel>
  );
};
