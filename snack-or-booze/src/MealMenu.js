import React from "react";
import { Link } from "react-router-dom";
import "./MealMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";



function MealMenu({ title, mealItems }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} MealMenu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {mealItems.map(mealItem => (
              <Link to={`/${title.toLowerCase()}/${mealItem.id}`} key={mealItem.id}>
                <ListGroupItem>{mealItem.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default MealMenu;
