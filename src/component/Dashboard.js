import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

let page = 1;
const fetchData = (setItems, items) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
    .then((res) => {
      setItems([...items, ...res.data]);
      page = page + 1;
    });
};

const refresh = (setItems) => {};

export default function Dashboard() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchData(setItems, items);
  }, []);

  return (
    <div>
      <h1>Infinite Scroll Listing</h1>
      <hr></hr>
      <InfiniteScroll
        style={{ marginTop: 10 }}
        dataLength={items.length} //This is important field to render the next data
        next={() => {
          fetchData(setItems, items);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        scrollThreshold={1.0}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&# 8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&# 8593; Release to refresh</h3>
        }
      >
        <div>
          {items.map((user) => (
            <div className="container">
              <Col xs={6}>
                <ListGroup>
                  <ListGroupItem href="#">
                    <Row className="vertical-align">
                      <Col xs={3}>
                        <Image
                          src={user.url}
                          circle
                          width="100"
                          style={{ borderRadius: 50 }}
                        />
                      </Col>
                      <Col xs={9}>
                        <h5 style={{ color: "#b6b6b5" }}>Yogesh Suthar</h5>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
