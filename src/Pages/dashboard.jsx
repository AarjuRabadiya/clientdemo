import React, { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";
import "../app.scss";
import Input from "../Component/input";
import TableCom from "../Component/Table";

import data from "../JSON/data.json";
function Dashboard() {
  const [search, setSearch] = useState("");
  const [headers, setHeaders] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [filter, setFilter] = useState({});
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(10);
  const history = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (data.length > 0) {
      setHeaders(Object.keys(data[0]));
    }
  }, [data]);
  useEffect(() => {
    if (data.length > 0) {
      if (filter.length > 0) {
        const res = data.filter(
          (obj1) =>
            (filter.includes("Name") && obj1.Name?.includes(search)) ||
            (filter.includes("Position") && obj1.Position?.includes(search)) ||
            (filter.includes("Office") && obj1.Office?.includes(search))
        );

        setFilterData(res);
      } else {
        const res = data.filter(
          (obj) =>
            obj?.Name.includes(search) ||
            obj?.Position.includes(search) ||
            obj?.Office.includes(search)
        );
        setFilterData(res);
      }
    }
  }, [search]);
  useEffect(() => {
    const no = history.search.split("?")[1];
    const newOffset = (no ? no : 0 * itemsPerPage) % filterData.length;
    setItemOffset(newOffset);
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterData.length;
    setItemOffset(newOffset);
    navigate(`/home?${event.selected}`);
  };

  return (
    <div className="Dashboard">
      <div className="m-b-5 dFaC">
        <Input
          type="text"
          value={search}
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="font-size-15 "
          placeHolder="Search"
        />
        <FaSistrix className="p-r-20" />
      </div>
      <div className="m-b-10">
        <select
          multiple
          id="filterSelect"
          onChange={(e) => {
            const options = e.target.options;
            setFilterData(data);
            const values = [];
            for (let i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                values.push(options[i].value);
              }
            }
            setFilter(values);
          }}
        >
          <option disabled>Select filter</option>
          {headers?.map((obj, key) => {
            return (
              <option key={key} value={obj}>
                {obj}
              </option>
            );
          })}
        </select>
      </div>

      <TableCom data={data} headers={headers} filterData={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
}

export default Dashboard;
