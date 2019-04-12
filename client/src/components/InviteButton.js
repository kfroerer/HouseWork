import React, { Component } from "react";
import { Button, NavItem, Modal, TextInput } from 'react-materialize';
import axios from 'axios';
import "../pages/style.css";

export default class InviteButton extends Component {
    resetForm = () => {
        document.getElementById('contact-form').reset();
    }

    handleSend = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                document.getElementById('sentStatus').innerHTML = "Email Sent!";
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                document.getElementById('sentStatus').innerHTML = "Email Failed to Send..."
            }
        })
    }


    resetSend = () => {
        document.getElementById('sentStatus').innerHTML = " "
    }

    render() {
        return (<NavItem >
            <Button href='#modal-invite' className="modal-trigger">Invite Housemates</Button>

            <Modal id='modal-invite' header="Invite Housemates">

                <h3 id="sentStatus"></h3>
                <div className="row">
                    <form className="col s12" id="contact-form" onSubmit={this.handleSend.bind(this)} method="POST">
                        <div className="row">
                            <div className="input-field col s6">
                                <TextInput icon="account_circle" id="name" type="text" label="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <TextInput icon="email" id="email" type="email" label="Email" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <TextInput icon="message" id="message" type="text" label="Message"></TextInput>
                            </div>
                        </div>
                    </form>
                </div>



                <Button type="submit" id="enter">Submit</Button>
            </Modal>
        </NavItem>)
    }

}

