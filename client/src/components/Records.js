import { Table } from "antd";
import React from "react";
import _ from "lodash";
import { DateTime } from "luxon";

const Records = (props) => {
  const { records } = props;

  const recordsToRender = records.map((record) => {
    return {
      ...record,
      paid: record.shir_avraham > record.shaked_hadas ? "Shir" : "Shaked",
      date: DateTime.fromISO(record.date).toFormat("dd/MM/yyyy"),
    };
  });

  const categories = _.groupBy(records, (record) => record.category);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: Object.keys(categories).map((category) => ({
        text: category,
        value: category,
      })),
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: (a, b) => a.cost - b.cost,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
      filters: [
        { text: "Shir", value: "Shir" },
        { text: "Shaked", value: "Shaked" },
      ],
      onFilter: (value, record) => record.paid.indexOf(value) === 0,
    },
  ];

  return (
    <Table
      dataSource={recordsToRender}
      columns={columns}
      pagination={{ defaultPageSize: 20 }}
    />
  );
};

export default Records;
