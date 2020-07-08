import React, { Component } from "react";
import styled from "styled-components";

import { ButtonContainer } from "../Customised Components/Button";

export default class CommentModal extends Component {
  render() {
    return (
      <div>
        {!this.props.commentModal ? null : (
          <CommentModalContainer>
            <div className="container">
              <div className="row">
                <div
                  id="commmentModal"
                  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                >
                  <h5>Add Your Review</h5>
                  <div className="my-2">
                    <form onSubmit={(e) => this.props.handleCommentSubmit(e)}>
                      <InputContainer
                        autoFocus
                        type="text"
                        placeholder="Your Name"
                        className="my-2"
                      />
                      <TextAreaContainer
                        rows="5"
                        placeholder="Enter Something about the prodict you like"
                        className="my-2"
                      />
                      <div>
                        <ButtonContainer type="submit" cart>
                          Submit
                        </ButtonContainer>
                        <ButtonContainer
                          onClick={() => this.props.closeComment()}
                        >
                          Close
                        </ButtonContainer>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </CommentModalContainer>
        )}
      </div>
    );
  }
}

const CommentModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #commmentModal {
    background: var(--mainWhite);
  }
`;

const InputContainer = styled.input`
  width: 100%;
  border: 0.125rem solid #aaa;
  border-radius: 0.3rem;
  margin: 0.5rem 0rem;
  outline: none;
  padding: 0.5rem;
  box-sizing: border-box;
  transition: 0.3s;
  &:focus {
    border-color: var(--mainYellow);
    box-shadow: 0rem 0rem 0.5rem 0rem var(--mainYellow);
  }
`;

const TextAreaContainer = styled.textarea`
  width: 100%;
  border: 0.125rem solid #aaa;
  border-radius: 0.3rem;
  margin: 0.5rem 0rem;
  outline: none;
  padding: 0.5rem;
  box-sizing: border-box;
  transition: 0.3s;
  &:focus {
    border-color: var(--mainYellow);
    box-shadow: 0rem 0rem 0.5rem 0rem var(--mainYellow);
  }
`;
