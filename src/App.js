import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'

import RestuMain from './Restaurant/RestuMain'
import IcrDecMain from './IcrDecBtn/IcrDecMain'
import UseReducer from './IcrDecBtn/UseReducer'
import TodoMain from './TodoList/TodoMain'
import AdvTodoMain from './TodoListAdv/AdvTodoMain'
import WeatherMain from './WeatherRealApi/WeatherMain'
import Contactus from './ContactusCSS-Firebase/Contactus'
// class Component Project
import IncDec from './ClassComponent/IncDec/IncDec'
import ClassTodoList from './ClassComponent/TodoList/ClassTodoList'
import ClassWeatherMain from './ClassComponent/WeatherRealApi/ClassWeatherMain'



const App = () => {
    return (
        <>
         <Routes>
         <Route exact path="/" element={<Home/>}/>
            <Route exact path="/restaurant" element={<RestuMain/>}/>
            <Route exact path="/usestate" element={<IcrDecMain/>}/>
            <Route exact path="/usereducer" element={<UseReducer/>}/>
            <Route exact path="/todomain" element={<TodoMain/>}/>
            <Route exact path="/advtodomain" element={<AdvTodoMain/>}/>
            <Route exact path="/weather" element={<WeatherMain/>}/>
            <Route exact path="/contactus" element={<Contactus/>}/>
            {/* Class Component Project */}
            <Route exact path="/incdec" element={<IncDec/>}/>
            <Route exact path="/classtodolist" element={<ClassTodoList/>}/>
            <Route exact path="/classweathermain" element={<ClassWeatherMain/>}/>
        </Routes>
        </>
    )
}

export default App;
