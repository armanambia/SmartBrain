import React from 'react';
import './ImageLinkForm.css';


class ImageLinkForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      val: ''
    };
  }
  onClick = (e) => {
    this.props.onButtonSubmit(e)
    this.setState({val:''})
  }
  onChange = (e) => {
    this.props.onInputChange(e)
    this.setState({val: e.target.value})
  }
  render () {
    return (
      <div>
        <p className='f3'>
          {'This Magic Brain will detect faces in your pictures. Git it a try.'}
        </p>
        <div className='center'>
          <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type='tex' onChange={this.onChange} value = {this.state.val}/>
            <button
              className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={this.onClick}
            >Detect</button>
          </div>
        </div>
      </div>
    );
  }
};


export default ImageLinkForm;