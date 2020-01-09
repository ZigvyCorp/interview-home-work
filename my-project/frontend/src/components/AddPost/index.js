import "./index.scss";
import React, { Component } from "react";
import { Modal, Tag, Tooltip, Input, Icon } from "antd";
import { connect } from "react-redux";
import { add_post } from "../../actions/post";

export class AddPost extends Component {
  state = {
    fields: {
      title: "",
      content: "",
      tags: [],
      createAt: ''
    },
    inputVisible: false,
    inputValue: ""
  };
  
  handleOk = () => {
    const fields = { ...this.state.fields };
    fields.createAt = (new Date()).getTime()
    this.setState({ fields })
    this.props.add_post(fields);
    this.props.handleCancel();
  };

  changeTitle = e => {
    const fields = { ...this.state.fields };
    fields.title = e.target.value;
    this.setState({ fields });
  };

  changeContent = e => {
    const fields = { ...this.state.fields };
    fields.content = e.target.value;
    this.setState({ fields });
  };


  handleClose = removedTag => {
    const tags = this.state.fields.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    const fields = { ...this.state.fields };
    let tags = [...fields.tags];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      fields.tags = [...tags, inputValue];
    }

    this.setState({
      fields,
      inputVisible: false,
      inputValue: ""
    });
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { fields, inputVisible, inputValue } = this.state;
    const { visible, handleCancel } = this.props;

    return (
      <div>
        <Modal
          title="New Post"
          visible={visible}
          onOk={this.handleOk}
          onCancel={handleCancel}
          onClose={handleCancel}
        >
          <div className="title">
            <input placeholder=" Title" onChange={this.changeTitle}></input>
          </div>
          <div className="content">
            <textarea
              placeholder=" Say something"
              onChange={this.changeContent}
            ></textarea>
          </div>
          <div>
            {fields.tags.map((tag, index) => {
              const isLongTag = tag.length > 20;
              const tagElem = (
                <Tag
                  key={tag}
                  closable={index !== 0}
                  onClose={() => this.handleClose(tag)}
                >
                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
              );
              return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                  {tagElem}
                </Tooltip>
              ) : (
                tagElem
              );
            })}
            {inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag
                onClick={this.showInput}
                style={{ background: "#fff", borderStyle: "dashed" }}
              >
                <Icon type="plus" /> New Tag
              </Tag>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = ({ postList }) => ({ postList });

export default connect(mapStateToProps, { add_post })(AddPost);
