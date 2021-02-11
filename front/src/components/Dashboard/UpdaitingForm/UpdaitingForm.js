import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory}from 'react-router-dom'
import {updateOneFetchAC} from "../../../redux/actionCreators/authAC"
import ModalWindow from '../../ModalWindow/ModalWindow'

function UpdateForm() {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const data = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const {username:{value:username},phone:{value:phone},email:{value:email},deposit:{value:deposit}} = e.target
    dispatch(updateOneFetchAC({username,phone,email,deposit}))
    setOpen(true)
  }
  const handleClick = () => {
    setOpen(false)
    history.push('/dashboard')
  }
  return (
    <div style={{display:"flex", justifyContent:"center", marginBottom:"100px"}}>
      <form onSubmit={handleSubmit}>
        <label>Введите новые данные:</label>
        <label>Логин:</label>
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            minLength={5}
            name="username"
            defaultValue={data.username}
          />
        </div>
        <label>Телефон:</label>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="phone" defaultValue={data.phone} />
        </div>
        <label>Email адрес:</label>
        <div className="col-6 col-12-xsmall">
          <input type="email" name="email" defaultValue={data.email} />
        </div>
        <label>Сумма депозита:</label>
        <div className="col-6 col-12-xsmall">
          <input type="number" name="deposit" defaultValue={data.deposit} />
        </div>
        <button className="button primary small">Обновить</button>
      </form>
        <ModalWindow open={open} setOpen={setOpen} handleClick={handleClick} text={'Ваши изменения сохранены!'} />
     </div>
  );
}

export default UpdateForm;
