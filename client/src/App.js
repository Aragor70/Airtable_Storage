import React, { Fragment, useEffect, useState } from 'react';
import { getData } from './actions/orders';

import globe from './style/icons/globe.png'

const App = () => {

  const [tools, setTools] = useState([]);

  useEffect(() => {

    const loadData = async() => {
      try {
        const data = await getData()
        setTools(data.orderList)
      } catch (err) {
        console.log(err)
      }
    }
    loadData()

  }, [])

  return (
    <Fragment>
      <header className="App-header">
        
          <h1>Tools Storage: Orders</h1>
          
      </header>
      <hr />
      <main className="output">

        {
          tools && tools.length > 0 ? <Fragment>

            <p>We have {tools.length} items on the list to order</p>


            <table>
              <tr style={{ borderBottom: '1px solid #000' }}>
              <td style={{ textAlign: 'center' }}>INDEX</td><td style={{ textAlign: 'center' }}>ID</td><td style={{ textAlign: 'center' }}>NAME</td><td style={{ textAlign: 'center' }}>CURRENT STATE</td><td style={{ textAlign: 'center' }}>TO ORDER</td>
              </tr>
              
              {
                tools.map((item, index) => <tr key={item.id}><td style={{ textAlign: 'center' }}>{index + 1}.</td><td>{item.id}</td> <td>{item.name}</td><td style={{ textAlign: 'center' }}>{item.count}</td><td style={{ textAlign: 'center' }}>{item.toOrder}</td><td><img src={globe} onClick={e => window.open(item.url, "_blank") } /></td></tr>)
              }
            
            </table>

            <p style={{ marginTop: '30px' }}>* current state includes number of the available items</p>

          </Fragment> : <Fragment>
            <p>No need to order the new tools.</p>
          </Fragment>
        }
        


      </main>

    </Fragment>
  );
}

export default App;
