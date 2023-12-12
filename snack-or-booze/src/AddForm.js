import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";
import SnackOrBoozeApi from "./Api";  

// Adds a new snack or drink to the menu

function AddForm({addSnack, addDrink}) {
    // Defining states and setting defaults
    const initialState = {name: "", description: "", recipe: "", serve:""}
    const [formData, setFormData] = useState(initialState);
    const [itemCategory, setItemCategory] = useState("snacks");

    const handleChange = (evt) => {
        const {name, value} = evt.target;
            setFormData(formData => ({
                ...formData, 
                [name]: value
            }));
    }

    const handleCategoryChange = (evt) => {
        let {value} = evt.target;
        setItemCategory(value);
    }
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let newItem = {...formData, id: formData.name};
        await SnackOrBoozeApi.addItem(newItem, itemCategory);
        if (itemCategory === 'snacks') {
            addSnack(newItem);
        } else {
            addDrink(newItem);
        }
        setFormData(initialState);
        setItemCategory("snacks");
        alert("Item added to menu!")
        // itemCategory = "snacks" ? <Redirect to="/snacks" /> : <Redirect to="/drinks" />;
    }

    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">Add Menu Item</CardTitle>
                    <CardText className="font-italic">Add a snack or drink:</CardText>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="category">Item Category</Label>
                            <Input 
                                type="select"
                                name="category"
                                id="category"
                                onChange={handleCategoryChange}
                                value={itemCategory}>
                                <option value="snacks" defaultValue>Snack</option>
                                <option value="drinks">Drink</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Item Name:</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Item Description:</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                onChange={handleChange}
                                value={formData.description}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="recipe">Recipe:</Label>
                            <Input
                                type="text"
                                name="recipe"
                                id="recipe"
                                onChange={handleChange}
                                value={formData.recipe}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="server">Serve:</Label>
                            <Input 
                                type="text"
                                name="serve"
                                id="serve"
                                onChange={handleChange}
                                value={formData.serve}
                            />
                        </FormGroup>

                        <Button>Add Menu Item</Button>
                    </Form>
                </CardBody>
            </Card>
        </section>
    )
}

export default AddForm;