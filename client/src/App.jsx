import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Coins } from './components/Coins'

function App() {

  const apiLink = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(apiLink).then(response => {
      setCoins(response.data)
      // console.log(response.data)
    }).catch(error => alert("there's something wrong with the api url dude."))
  }, [])

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* {console.log(filteredCoins)} */}
      <div className='title-input'>
        <h1 className='title'>Crypto Tracker</h1>
        <input type='text'
          placeholder='Search'
          onChange={handleChange} />
      </div>

      <div className='coin-cards'>
        {/* {coins.map((coin, index) => {
          return (
            <div key={index}>
              <Coins name={coin.name}
                price={coin.current_price}
                image={coin.image}
                lastUpdated={coin.last_updated}
                rank={coin.market_cap_rank}
                high={coin.high_24h}
                low={coin.low_24h} />
            </div>
          )
        })} */}
        {filteredCoins.map(coin => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              image={coin.image}
              lastUpdated={coin.last_updated}
              rank={coin.market_cap_rank}
              high={coin.high_24h}
              low={coin.low_24h} />

          )
        })}
      </div>

    </>
  )
}

export default App
