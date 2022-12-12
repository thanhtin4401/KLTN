import React from 'react';
import Filter from './Filter';
import RoomItem from './RoomItem';

function RoomPages() {
  return (
    <div className="container mx-auto pb-5  sm:pt-[0px] md:pt-[6rem] mb:pt-[6rem]">
      <div className="flex w-full">
        <div className="w-4/12 mb:hidden sm:block pr-4">
          <Filter />
        </div>
        <div className="mb:w-full sm:w-8/12">
          <RoomItem />
          <RoomItem />
          <RoomItem />
        </div>
      </div>
    </div>
  );
}

export default RoomPages;
