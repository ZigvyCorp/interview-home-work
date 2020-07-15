import React from 'react';
import { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
//css - inline
const coloredLine = {
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}
class Post extends Component {
    state = {
        fontColor: {
            color: ''
        },
        test: 1
    };

    setFontColor = (colorName) => {
        console.log('clicked');
        this.setState({
            fontColor: {
                color: colorName
            }
        });
    }
    
    render() {
        return (
            <div className='mt-2'>
                <Row className="justify-content-md-center">
                    <Col md="auto"><h1 >{this.props.title}</h1></Col>
                </Row>
                <Row>
                    <Col md={ 8 }>
                        <p className={Row}>Author: {this.props.owner}</p>
                        <p className={Row}>Created at: {this.props.createAt}</p>
                    </Col>
                    <Col md={ 4 }>
                            <Row className='ml-0'>
                                <p onClick={this.setFontColor.bind(this, 'magenta')} style={{color: 'magenta'}} className='mr-2'>magenta</p>
                                <p onClick={this.setFontColor.bind(this, 'red')}  style={{color: 'red'}} className='mr-2'>red</p>
                                <p onClick={this.setFontColor.bind(this, 'yellow')}  style={{color: 'yellow'}} className='mr-2'>yellow</p>
                                <p onClick={this.setFontColor.bind(this, 'orange')}  style={{color: 'orange'}} className='mr-2'>orange</p>
                                <p onClick={this.setFontColor.bind(this, 'gold')} style={{color: 'gold'}} className='mr-2'>gold</p>
                                <p onClick={this.setFontColor.bind(this, 'lime')} style={{color: 'lime'}} className='mr-2'>lime</p>
                                <p onClick={this.setFontColor.bind(this, 'green')} style={{color: 'green'}} className='mr-2'>green</p>
                                <p onClick={this.setFontColor.bind(this, 'cyan')}  style={{color: 'cyan'}} className='mr-2'>cyan</p>
                                <p onClick={this.setFontColor.bind(this, 'blue')}  style={{color: 'blue'}} className='mr-2'>blue</p>
                                <p onClick={this.setFontColor.bind(this, 'grey')} style={{color: 'grey'}} className='mr-2'>grey</p>
                                <p onClick={this.setFontColor.bind(this, 'purple')} style={{color: 'purple'}} className='mr-2'>purple</p>
                            </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={this.state.fontColor}>
                        <p>{this.props.content}</p>
                    </Col>
                </Row>
                <hr style={coloredLine}/>
            </div>
        );
    }
}


export default Post;
