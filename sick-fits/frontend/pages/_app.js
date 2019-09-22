import App, { Container } from "next/app";
import Page from "../components/Page";
class MyApp extends App {
  //component is what gets switched out with each page

  //<p>Hey I'm on every pages</p>
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
