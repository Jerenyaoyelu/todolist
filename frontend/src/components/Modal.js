import React, { Component } from "react";
import {Button,Modal,ModalHeader,ModalFooter,ModalBody,Form,FormGroup,Input,Label} from "reactstrap";

export default class CustomModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeItem: this.props.activeItem            
            // represents the todo item to be edited
        };
    }
    handleChange = e =>{
        let{name,value}=e.target;
        if(e.target.type === "checkbox"){
            value = e.target.checked;
        }
        const activeItem = {
            ...this.state.activeItem,[name]:value
        };
        this.setState({activeItem});
    };
    render(){
        // toggle is a function to control the Modal's state i.e open or close the modal
        // onSave is a function that is called to save the edited values of the Todo item
        const {toggle,onSave} = this.props;
        return(
            <Modal isOpen={true} toggle={toggle}>
                {/* header */}
                <ModalHeader toggle={toggle}>
                    Todo Item
                </ModalHeader>
                {/* body */}
                <ModalBody>
                    <form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                value={this.state.activeItem.title} 
                                onChange={this.handleChange}
                                placeholder="Add Todo Title" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="notes">notes</Label>
                            <Input
                                type="text"
                                name="notes"
                                value={this.state.activeItem.notes}
                                onChange={this.handleChange}
                                placeholder="Add Todo notes"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="created_at">created_at</Label>
                            <Input
                                type="date"
                                name="created_at"
                                checked={this.state.activeItem.created_at}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">Completed</Label>
                            <Input
                                type="checkbox"
                                name="completed"
                                checked={this.state.activeItem.completed}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </form>
                </ModalBody>

                {/* footer */}
                <ModalFooter>
                    <Button 
                        color="success" 
                        onClick={()=>onSave(this.state.activeItem)}
                        >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}