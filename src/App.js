import React, { Component } from 'react'
import Goodbye from './components/Goodbye';
class App extends Component{
    state={
        level:0,
        delay:0,
        levelTemp:0,
        score:0,
        place:[],
        finish:false,
        maxScore:15
    }
    showCanvasGame=()=>{
        const currentDelay=parseInt(document.getElementById("inputDelay").value)*1000;
        this.setState({
            delay:currentDelay,
            level:this.state.levelTemp,
        });
        setTimeout(()=>{
            if(this.state.level>0 && this.state.delay>=1000){
                const func=()=>{
                    let tab=[];
                    for(let i=0;i<this.state.level;i++){
                        let index=parseInt(Math.random()*9)+1;
                        tab.push(index);
                        this.setState({
                            place: tab
                        });
                    }
                    setTimeout(()=>{
                        setTimeout(()=>{
                            for(let i=0;i<this.state.level;i++){
                                tab[i]=0;
                                this.setState({
                                    place: tab
                                });
                            }
                            this.setState({place:0})
                            let interval=setInterval(() => {
                                clearInterval(interval);
                                if(this.state.score<this.state.maxScore){
                                    func();
                                }
                            }, 2000);
                        },this.state.delay)
                    },100)
                }
                func();
            }
        },100)
    }
    handleChange = (niveau) => {
        this.setState({
            levelTemp: niveau
        });
    };
    verify(pos){
        let compteur=0;
        let tab=[];
        for(let i=0;i<this.state.level;i++){
            tab[i]=this.state.place[i];
            if(this.state.place[i]===pos && this.state.place[i]!==0){
                compteur++;
                tab[i]=0;
            }
        }
        this.setState({place:tab});
        if(compteur>0){
            this.setState({
                score: this.state.score+compteur
            });
        }else if(this.state.score>0){
            this.setState({
                score: this.state.score-1
            });
        }
    }
    searcIndex(place){
        let bool=false;
        for(let i=0;i<this.state.level;i++){
            if(this.state.place[i]===place){
                bool=true;
                break;
            }
        };
        return bool;
    }
    render(){
        return (
            <div className='flex mx-8'>
            {this.state.finish===false?
                <>
                    <div className='flex'>
                        <div>
                            <h1 className='text-xl font-medium text-black'>Difficulté</h1>
                            <div className=''>
                                <input type='radio' id="#inp1" name="choix" onChange={(e) => this.handleChange(1)} />Facile
                            </div>
                            <div className=''>
                                <input type='radio' id="#inp2" name="choix" onChange={(e) => this.handleChange(2)} />Normal
                            </div>
                            <div className=''>
                                <input type='radio' id="#inp3" name="choix" onChange={(e) => this.handleChange(3)} />Difficile
                            </div>
                            <div>
                                <label className='block '>Durée de visibilité (s)</label>
                                <input  type="number" placeholder='1' id="inputDelay" required className='block bg-white-500 outline-none text-black font-bold py-2 px-3  w-16 border border-gray-400 border-2 m-3 rounded-lg'/>
                                <button type="submit" onClick={this.showCanvasGame} className='bg-gray-500 hover:bg-gray-400 text-white font-bold py-4 px-8 rounded' id='btn'>Play</button>
                            </div>
                        </div>
                        <div className='w-1 h-full mx-4  bg-black'></div>
                        {this.state.level!==0 && document.getElementById('inputDelay').value!=='' ?
                        <div className='mx-20'>
                            <h2 className='block text-black font-bold py-2 px-3  m-3 max-w-auto rounded-lg'>Score: <span className='fontbold'>{this.state.score}</span></h2>
                            <div className='mx-16 my-10'>
                                <div className='flex'>
                                    <p onClick={e=>this.verify(1)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(1)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                    <p onClick={e=>this.verify(2)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(2)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                    <p onClick={e=>this.verify(3)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(3)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                </div>
                                <div className='flex'>
                                    <p onClick={e=>this.verify(4)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(4)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                    <p onClick={e=>this.verify(5)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(5)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                    <p onClick={e=>this.verify(6)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(6)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                </div>
                                <div className='flex'>
                                    <p onClick={e=>this.verify(7)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(7)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                    <p onClick={e=>this.verify(8)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(8)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                    <p onClick={e=>this.verify(9)} className='bg-white text-black fontbold w-16 h-16 justify-center align-center flex py-3 border-4 my-2 mx-1 h-14 text-center cursor-pointer' >{this.searcIndex(9)?<p className='bg-black border-16  my-2 w-4 h-4 rounded-full'></p>:null}</p>
                                </div>
                            </div>
                        </div>: null}
                    </div>
                    {this.state.score>=this.state.maxScore?
                        <section className='absolute t-6 p-6 mx-16 my-8 max-w-sm bg-white rounded-xl top-0 shadow-lg space-x-4 text-center'>
                            <span className='block text-black font-bold py-2 px-3  m-3 max-w-auto rounded-lg'>Félicitation Vous avez gagnez!!!!!!!!!!!</span>
                            <span className='block text-black font-bold py-2 px-3  m-3 max-w-auto rounded-lg'>Ca Vous dirait de faire une autre partie !!!!!!!!!</span>
                            <h1 className='text-black font-bold py-2 px-3 border border-gray-400 border-2 m-3 max-w-auto rounded-lg'>Score: {this.state.score}</h1>
                            <button onClick={()=>this.setState({
                                level:0,
                                delay:0,
                                levelTemp:0,
                                score:0,
                                place:[],
                                finish:false
                            })} className='bg-green-500 text-white font-bold py-2 px-6 rounded'>Oui</button>
                            <button onClick={()=>this.setState({finish:true})} className='bg-red-500 text-white font-bold py-2 px-6 rounded'>Non</button>
                        </section>
                        :null}
                </>
            : <Goodbye/>}
            </div>
            )
    }
        
}
export default App