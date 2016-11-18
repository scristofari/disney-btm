import Home from './components/Home/Home'
import Game from './components/Game/Game'
import FastPass from './components/FastPass/FastPass'
import Result from './components/Result/Result'

export const routes = [{
    path: '/',
    component: Home,
},        
{ 
    path: '/quiz/1',
    component: Game 
},
{ 
    path: '/fastpass',
    component: FastPass 
},
{ 
    path: '/result',
    component: Result 
},
{ 
    path: '/*',
    component: Home 
}];