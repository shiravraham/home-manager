import React, { Fragment } from "react";
import "./App.css";
import { Layout } from "antd";
import FileReader from "./components/FileReader";
import Records from "./components/Records";
import Statistics from "./components/statistics/Statistics";
import { useSelector } from "react-redux";
import { addRecords } from "./actions/records";
import store from "./store";

const { Header, Content } = Layout;

const App = () => {
  const data = useSelector((state) => state.records.records);

  const onFileLoaded = (data) => {
    const aggregatedData = data.map((record, index) => ({
      key: index,
      ...record,
    }));

    store.dispatch(addRecords(aggregatedData));
  };

  return (
    <Layout>
      <Header>Home Manager</Header>
      <Content className="container center">
        <FileReader onFileLoaded={(data) => onFileLoaded(data)} />
        {data && data.length > 0 ? (
          <Fragment>
            <Statistics data={data} />
            <Records records={data} />
          </Fragment>
        ) : (
          "No records, please upload a file."
        )}
      </Content>
    </Layout>
  );
};

export default App;
