import React, { useEffect, useState } from "react";
import _ from "lodash";
import { DateTime } from "luxon";
import CategoryPie from "./CategoryPie";
import MonthlyExpensesBar from "./MonthlyExpensesBar";
import { Row, Col } from "antd";

const Statistics = (props) => {
  const { data } = props;
  const [expensesPerMonth, setExpensesPerMonth] = useState([]);
  const [expensesPerCategory, setExpensesPerCategory] = useState([]);

  // const totalBalance = data.pop();

  const setMonthlyExpensesGraph = (data) => {
    const monthlyExpenses = _.groupBy(data, (record) =>
      DateTime.fromISO(record.date).toFormat("MMMM yy")
    );

    const monthlyExpensesSum = _.mapValues(monthlyExpenses, (month) =>
      _.sumBy(month, (record) => record.cost)
    );

    setExpensesPerMonth(monthlyExpensesSum);
  };

  const setCategoriesGraph = (data) => {
    const categories = _.groupBy(data, (record) => record.category);
    const categoriesSum = _.mapValues(categories, (category) =>
      _.sumBy(category, (record) => record.cost)
    );

    setExpensesPerCategory(
      _.fromPairs(_.sortBy(_.toPairs(categoriesSum), 1).reverse())
    );
  };

  useEffect(() => {
    setMonthlyExpensesGraph(data);
    setCategoriesGraph(data);
  }, [data]);

  return (
    <Row>
      <Col xs={{ span: 8, offset: 1 }} lg={{ span: 10, offset: 2 }}>
        <MonthlyExpensesBar expensesPerMonth={expensesPerMonth} />
      </Col>
      <Col xs={{ span: 8, offset: 1 }} lg={{ span: 10, offset: 2 }}>
        <CategoryPie expensesPerCategories={expensesPerCategory} />
      </Col>
    </Row>
  );
};

export default Statistics;
