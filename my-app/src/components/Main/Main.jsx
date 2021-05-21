import React from 'react';
import Start from './Start/Start'
import Fail from './Fail/Fail';
import Success from './Success/Success.jsx';


function Main(props) {
      console.log(props.error);
      if(props.start){
        return (
        <div className = 'main'>
        <Start />
        </div>
        )
      }
      else if (props.error) {
      return (
        <div className = 'main'>
        <Fail />
        </div>
      )
      } else if (!props.isLoaded) {
        return (
        <div className = 'main'>
        <p> Загрузка... </p>
        </div>
        )
    } else if (props.user.message) {
      return (
        <div className = 'main'>
        <Fail />
        </div>
      )
      } else {
      return (
      <div className = 'main'>
        <Success user = {props.user} repos = {props.repos}/>
      </div>
    );
  }
}
export default Main;