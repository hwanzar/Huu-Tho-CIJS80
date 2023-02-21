import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Item from './Item';

function App() {

  const [showForm, setShowForm] = useState(false);
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({});
  const [filterYear, setFilterYear] = useState("");
  const [amounts, setAmounts] = useState(Array(12).fill(0));
  const [maxAmount, setMaxAmount] = useState(0);
  const [ratios, setRatios] = useState(Array(12).fill(0));

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleAdd = () => {
    setList([...list, formData]);
    setFormData({});
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFilterChange = event => {
    setFilterYear(event.target.value);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    // Calculate total amount for each month in filtered list
    const amounts = Array(12).fill(0);
    list.filter(item => !filterYear || new Date(item.date).getFullYear() == Number(filterYear))
      .forEach(item => {
        const month = new Date(item.date).getMonth();
        amounts[month] += Number(item.amount);
      });
    setAmounts(amounts);

    // Calculate ratio percentage for each month and update max amount
    let totalAmount = amounts.reduce((acc, amount) => acc + amount, 0);
    let maxRatio = 0;
    const ratios = amounts.map(amount => {
      const ratio = totalAmount > 0 ? (amount / totalAmount) * 100 : 0;
      maxRatio = Math.max(maxRatio, ratio);
      return ratio;
    });
    setMaxAmount(maxRatio);
    setRatios(ratios);
  }, [list, filterYear]);
  console.log(ratios);

  const handleDelete = () => {
    
  }

  return (
    <div className='App'>
      {/* BEGIN FORM HERE */}
      {!showForm ? (
        <div className='header'>
          <button className='add-new-btn' onClick={handleShowForm}> ADD NEW EXPENSE </button>
        </div>
      ) : (
        <div className='Header'>
          <form className='form'>
            <div className='input'>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name here ..."
                onChange={handleChange}
                value={formData.name || ""}
              />
            </div>

            <div className='input'>
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount here ..."
                onChange={handleChange}
              />
            </div>

            <div className='input'>
              <label>Date</label>
              <input
                type="date"
                name="date"
                placeholder="dd/mm/yyyy"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

            </div>

            {/* Add and Cancel button */}
            <div className='btn'>
              <button id='add-btn' onClick={handleAdd}>ADD</button>
              <button id='cancel-btn' onClick={handleCancel}>CANCEL</button>
            </div>

          </form>
        </div>
      )}
      {/* END FORM HERE */}

      <div className='List'>
        {/* BEGIN FILTER */}
        <div className='Filter'>
          <div className='Filter-left'>Filter by year</div>
          <select name="filterYear" onChange={handleFilterChange} value={filterYear}>
            <option value="">All</option>
            {[...new Set(list.map(item => new Date(item.date).getFullYear()))].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        {/* END FILTER */}


        {/* BEGIN GRAPH */}
        <div className='graph'>
          <Item name='Jan' ratio={ratios[0]} />
          <Item name='Feb' ratio={ratios[1]} />
          <Item name='Mar' ratio={ratios[2]} />
          <Item name='Apr' ratio={ratios[3]} />
          <Item name='May' ratio={ratios[4]} />
          <Item name='Jun' ratio={ratios[5]} />
          <Item name='Jul' ratio={ratios[6]} />
          <Item name='Aug' ratio={ratios[7]} />
          <Item name='Sep' ratio={ratios[8]} />
          <Item name='Oct' ratio={ratios[9]} />
          <Item name='Nov' ratio={ratios[10]} />
          <Item name='Dec' ratio={ratios[11]} />
        </div>
        {/* END GRAPH */}

        {/* BEGIN LIST */}
        {list.filter(item => !filterYear || new Date(item.date).getFullYear() == Number(filterYear))
          .map((item, index) => (
            <div className='todoItem'>
              <div className='renderDate'>
                <div>{monthNames[Number(String(item.date).substring(5, 7)) - 1]}</div>
                <div>{Number(String(item.date).substring(0, 4))}</div>
                <div style={{
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: '30%',
                }}>{Number(String(item.date).substring(8, 10))}</div>
              </div>
              <div className='renderName'>{item.name}</div>
              <div className='renderAmount'> {`$` + String(item.amount)} </div>
              <div className='close_button' onClick={handleDelete}>
                <img  src = 'https://i.pinimg.com/564x/d2/b0/10/d2b01052124d637b98d00d0e595b8965.jpg' />
              </div>

            </div>
          ))}
        {/* END LIST */}

      </div>
    </div>
  );
}

export default App;
