import './css/Todoitem.css';
import tick from "./Assets/tick.jpg";
import cross from "./Assets/cross.png";
import not_tick from "./Assets/not_tick.png";

const Todoitem = ({ no, display, text }) => {
  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        <div className="todoitems-text">{text}</div>
        <img className='todoitems-cross-icon' src={cross} alt="" />
      </div>
      <div className="todoimages">
        <img src={not_tick} alt="" />
        <img src={tick} alt="" />
      </div>
    </div>
  );
}

export default Todoitem;
