import React, { useState } from 'react'
import { useRef } from 'react'
import '../src/App.css'
const App = () => {
  const inpref = useRef(null); 
  const [top, setTop] = useState({ backgroundColor: 'blue' }); 
  const [bottom, setbottom] = useState({ backgroundColor: 'green' }); 

  function handlebut(e) {
    e.preventDefault();
    localStorage.setItem('item', inpref.current.value.split(' ').map(word => word.toUpperCase()).join(' '));
    inpref.current.value = '';
    const storedValue = localStorage.getItem('item'); 
    

    if (storedValue && storedValue.includes('B')) {
     
      setTop({
        transform: 'translateY(-60px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BB')) {
     
      setTop({
        transform: 'translateY(-120px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBB')) {
     
      setTop({
        transform: 'translateY(-180px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBB')) {
     
      setTop({
        transform: 'translateY(-240px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBB')) {
     
      setTop({
        transform: 'translateY(-300px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBBB')) {
     
      setTop({
        transform: 'translateY(-360px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBBBB')) {
     
      setTop({
        transform: 'translateY(-420px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBBBB')) {
     
      setTop({
        transform: 'translateY(-480px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBBBBBB')) {
     
      setTop({
        transform: 'translateY(-540px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBBBBBB')) {
     
      setTop({
        transform: 'translateY(-600px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('BBBBBBBBBBB')) {
     
      setTop({
        transform: 'translateY(-660px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }



    if (storedValue && storedValue.includes('H')) {
     
      setbottom({
        transform: 'translateY(60px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HH')) {
     
      setbottom({
        transform: 'translateY(120px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHH')) {
     
      setbottom({
        transform: 'translateY(180px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHH')) {
     
      setbottom({
        transform: 'translateY(220px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHH')) {
     
      setbottom({
        transform: 'translateY(280px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHHH')) {
     
      setbottom({
        transform: 'translateY(340px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHHHH')) {
     
      setbottom({
        transform: 'translateY(400px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHHHHH')) {
     
      setbottom({
        transform: 'translateY(460px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHHHHHH')) {
     
      setbottom({
        transform: 'translateY(520px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHHHHHHH')) {
     
      setbottom({
        transform: 'translateY(580px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }
    if (storedValue && storedValue.includes('HHHHHHHHHH')) {
     
      setbottom({
        transform: 'translateY(640px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }


    if (storedValue && storedValue.includes('P')) {
     
      setbottom({
        transform: 'translateX(60px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PP')) {
     
      setbottom({
        transform: 'translateX(120px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPP')) {
     
      setbottom({
        transform: 'translateX(180px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPP')) {
     
      setbottom({
        transform: 'translateX(240px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPP')) {
     
      setbottom({
        transform: 'translateX(300px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPP')) {
     
      setbottom({
        transform: 'translateX(360px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPPP')) {
     
      setbottom({
        transform: 'translateX(420px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPPPP')) {
     
      setbottom({
        transform: 'translateX(480px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPPPPP')) {
     
      setbottom({
        transform: 'translateX(540px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPPPPPP')) {
     
      setbottom({
        transform: 'translateX(600px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPPPPPPP')) {
     
      setbottom({
        transform: 'translateX(660px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue && storedValue.includes('PPPPPPPPPPPP')) {
     
      setbottom({
        transform: 'translateX(720px)', 
        transition: '2s',               
      }); 
    } else {
      console.log('item topilmadi');
    }

    if (storedValue.includes('O')) {
      alert('P ong tarafga B yuqoriga urish H pastga yurish ')
    } else {
      console.log('item topilmadi');
    }

  }
  


  return (
    <div>
      <div className="conta">
      <h1>Malumot olish uchun inputga O ni kiriting</h1>
      <div className='display'>
        
        <div className="box">

          <h1>Control panel</h1>
          <div className="birqator">
          <div className="yacheyka"><div className="sharik" style={bottom}></div></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          </div>
          <div className="birqator">
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"></div>
          <div className="yacheyka"><div className="sharik2" style={top}></div></div>
          </div>
          <form>
            <label>Enter command</label> <br />
            <input ref={inpref} type="text" placeholder='e.g, LLVVPPONB'/> <br />
            <button onClick={handlebut}>Execute Command</button>
          </form>
        </div>
        <div className="boxtwo">
          <h1>Command history</h1>
          <ul>
            <li>Orginal</li>
            <li>Optimized</li>
            <li>Timestamp</li>
            <li>Before</li>
            <li>After</li>
          </ul> <br /> <hr />
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App