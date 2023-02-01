import React, { Component } from "react";
import alertify from "alertifyjs";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alertify.success(this.state.email + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter E-Mail"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="description"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Antalya</option>
              <option>İstanbul</option>
              <option>Ankara</option>
            </Input>
          </FormGroup>
          <Button type="submit">save</Button>
        </Form>
      </div>
    );
  }
}
