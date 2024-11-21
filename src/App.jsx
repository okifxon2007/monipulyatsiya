import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import '../src/App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const inpref = useRef(null); 
  const [top, setTop] = useState({ backgroundColor: 'blue' }); 
  


  function handlebut(e) {
  e.preventDefault();

 
  const inputValue = inpref.current.value.split(' ').map(word => word.toUpperCase()).join(' ');
  localStorage.setItem('item', inputValue);
  inpref.current.value = '';

  const storedValue = localStorage.getItem('item');

  if (storedValue) {
    
    let transformValue = 0;
    const letterMap = { B: -60, H: 60, P: 60 }; 
    Object.keys(letterMap).forEach(letter => {
      const count = (storedValue.match(new RegExp(letter, 'g')) || []).length;
      transformValue += count * letterMap[letter];
    });

    if (transformValue !== 0) {
      const axis = storedValue.includes('P') ? 'X' : 'Y'; 
      setTop({
        transform: `translate${axis}(${transformValue}px)`,
        transition: '2s',
      });
      toast.success("Xabar muvaffaqiyatli yuborildi!");
    } else {
      toast.error("Harakat mavjud emas!");
    }
  } else {
    console.log("LocalStorage bo'sh.");
  }

 
  if (storedValue.includes('O')) {
    alert("P: o'ngga | B: yuqoriga | H: pastga harakat qiling.");
  }
}

  


  return (
    <div>
      <div className="conta">
         <ToastContainer />
      <h1>Malumot olish uchun inputga O ni kiriting agar siz bir nechta yani 'HH PP BB ' qilib kiriting va ishlaydi</h1>
      <div className='display'>
        
        <div className="box">

          <h1>Control panel</h1>
          <div className="birqator">
          <div className="yacheyka"><div className="sharik" style={top}></div></div>
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
          <div className="yacheyka"></div>
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
          <ul className='vl'>
            <li>L</li>
            <li>{Date.now()}</li>
            <li>(0,2)</li>
            <li>(2,0)</li>
            
          </ul>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App