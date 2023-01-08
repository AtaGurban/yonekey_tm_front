import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import "./App.css";
import AppRouter from "./components/AppRouter";
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userAPI";
import {MoonLoader} from 'react-spinners'
import { getTitleCategoryWithCategory } from "./http/mainPageApi";
import Popup from "./components/Popup";



const App = observer(() => {
  const { user, category } = useContext(Context) 
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ 
     (async function(){
      // await getTitleCategory().then(async data=>{
      //   await category.setTitleCategory(data)
      // })
      await getTitleCategoryWithCategory().then(async data=>{
        await category.setTitleCategory(data)
      })
      await check().then(async data => {
        await user.setUser(data)
        await user.setIsAuth(true) 
      }).finally(() => setLoading(false))
    })();
  }, []) 

  
  if(loading){
    return (
      <div style={{alignItems: 'center',  justifyContent: 'center', height: '100vh'}} className='d-flex'>
      <MoonLoader color="#000000" />
    </div>)
  }
  return (
    <BrowserRouter>
      <Popup/>
      <AppRouter />
    </BrowserRouter>
  );
});
export default App;