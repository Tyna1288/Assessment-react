import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MealItem({ mealItems, cantFind }) {
  const { id } = useParams();

  let mealItem = mealItems.find(mealItem => mealItem.id === id);
  if (!mealItem) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {mealItem.name}
          </CardTitle>
          <CardText className="font-italic">{mealItem.description}</CardText>
          <p>
            <b>Recipe:</b> {mealItem.recipe}
          </p>
          <p>
            <b>Serve:</b> {mealItem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MealItem;
