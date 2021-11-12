import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {addCustomeAction, removeCustomerAction} from "./store/customerReducer"


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(customers);
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomeAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div
              key={customer.id}
              onClick={() => removeCustomer(customer)}
            >{customer.name}</div>
          )}
        </div>
        :
        <div>
          Клиенты отсутствуют!
        </div>}
    </div>
  );
}

export default App;
