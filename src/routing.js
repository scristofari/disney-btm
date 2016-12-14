import Home from './components/Home/Home'
import Game from './components/Game/Game'
import FastPass from './components/FastPass/FastPass'

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
}];