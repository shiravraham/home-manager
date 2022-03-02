import React, { Fragment, useState } from "react";
import "./App.css";
import { Layout } from "antd";
import FileReader from "./components/FileReader";
import Records from "./components/Records";
import Statistics from "./components/statistics/Statistics";
import { Provider } from "react-redux";
import store from "./store";
import { addRecords } from "./actions/records";

const { Header, Content } = Layout;

const App = () => {
  const [data, setData] = useState([]);

  const onFileLoaded = (data) => {
    const aggregatedData = data.map((record, index) => ({
      key: index,
      ...record,
    }));

    store.dispatch(addRecords(aggregatedData));
    setData(aggregatedData);
  };

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
