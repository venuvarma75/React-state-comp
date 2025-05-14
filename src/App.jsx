// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       color:"red"
//     }
//   }
//   myFunction=(clr)=>{
//     this.setState({color:this.state.color=clr})
//   }
//   render() {
//     console.log(this.state.color,"color")
//     console.log(this)
//     return (
//       <div style={{backgroundColor:this.state.color}}>
//         <h1>VTech</h1>
//         <h1>{}</h1>
//         <h1><button onClick={()=>this.myFunction("Red")}>Red</button></h1>
//         <h1><button onClick={()=>this.myFunction("Orange")}>Orange</button></h1>
//         <h1><button onClick={()=>this.myFunction("Yellow")}>Yellow</button></h1>
//         <h1><button onClick={()=>this.myFunction("Green")}>Green</button></h1>
//         <h1><button onClick={()=>this.myFunction("Blue")}>Blue</button></h1>
//         <h1><button onClick={()=>this.myFunction("Indigo")}>Indigo</button></h1>
//         <h1><button onClick={()=>this.myFunction("Violet")}>Violet</button></h1>


//       </div>
//     )
//   }
// }





// import React from 'react'
// class App extends React.Component{
// constructor(){
//   super()
//   this.state={
//     count:0
//   }
// }

// handleClick=()=>{
//   this.setState({count:this.state.count+100})
// }
    
  

//   render(){
//     return (
//      <div>
//      <h1>Hello</h1>
//      <h1>{this.state.count}</h1>
//      <button onClick={this.handleClick}>Increment</button>
//      </div>

//     )
//   } 
// }

// export default App


// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       color:"white"
//     }
// }

// myColor=(clr)=>{
//   this.setState({color:this.state.color=clr})
// }
// render(){
//   return (
//     <div style={{backgroundColor:this.state.color}}>
//       <h1>hello</h1>
//       <h1>{this.state.count}</h1>
//       <button onClick={()=>this.myColor("red")}>red</button>
//     </div>
//   )
// }
// }


// export default App;




// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   myClick=()=>{
//     this.setState({count:this.state.count+10})
//   }
//     ownClick=()=>{
//     this.setState({count:this.state.count-10})
//   }




//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.myClick}>Increment</button>
//         <button onClick={this.ownClick}>Decrement</button>
//         <button onClick={()=>this.setState({count:this.state.count=0})}>reset</button>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       color:"red"
//     }
//   }
//   myClick=(clr)=>{
//     let chars="abcdef0123456789";
//     let hexa="#"
//     for (let i=0;i<6;i++){
//       // console.log(i)
//      const randomNumber=Math.floor(Math.random() * chars.length)
//      //console.log(chars[randomNumber])
//      hexa+=chars[randomNumber]
//     // console.log(hexa,"colorcode")
//     }
//     this.setState({color:hexa})
//   }
//   render() {
//     return (
//       <div style={{backgroundColor:this.state.color}}>
//         <button onClick={()=>this.myClick("blue")}>RandomColor</button>
//       </div>
//     )
//   }
// }
  // import React, { Component } from 'react'
  
  // export default class App extends Component {
  //   constructor(){
  //     super()
  //   this.state={
  //     color:"red"
  //   }
  //   }
  //   ownClick=()=>{
  //     let chars="abcedf123456789"
  //     let hexa="#"
  //     for (let i=0;i<6;i++){
  //      let randomNumber=Math.floor(Math.random() * chars.length)
  //      console.log(randomNumber)
  //      hexa+=chars[randomNumber]
  //      this.setState({color:hexa})

  
  //   }
     
  // }
        
  //   render() {
  //     return (
  //       <div style={{backgroundColor:this.state.color}}>
  //         <button onClick={this.ownClick}>randomColor</button>
  //       </div>
  //     )
  //   }
  // }
  

  // import React, { Component } from 'react'
  
  // export default class App extends Component {
  //   constructor(){
  //     super()
  //     this.state={
  //       quote:"Parctice makes man perfect"
  //     }
  //   }
  //   handleRandomQuote=()=>{
  //     const teluguQuotes=[
  //      <p> నా కాఫీ కప్పులో<br />
  //     షుగర్ క్యూబ్ నువ్వే నువ్వే<br />
  //     నా కంటి రెప్పలో కాటుక ముగ్గు నువ్వే నువ్వే<br />
  //     నా చెంపలకంటినా<br />
  //     చేమంతి సిగ్గు నువ్వే నువ్వే<br />
  //     నా ఊపిరి గాలిని<br />
  //     పర్ఫ్యూమ్ అల్లే చుట్టేస్తావే<br />
  //     ఓ మై బేబీ ఓ<br />
  //     నీ బుగ్గలు పిండాలి<br />
  //     ఓ మై బేబీ ఓ<br />
  //     నీకు ముద్దులు పెట్టాలీ<br />
  //     ఓ మై బేబీ ఓ<br />
  //     నా చున్నీ నీకు టై కట్టాలి<br />

  //     క్రెవింగ్ క్రెవింగ్.. క్రెవింగ్ ఫర్ యు<br />
  //     నా పిల్లో పక్కన నొవెల్ నువ్వు<br />
  //     ట్రిప్పింగ్ ట్రిప్పింగ్.. ట్రిప్పింగ్ ఆన్ యు<br />
  //     నా ప్లే లిస్ట్ అయిపోయావు<br />
  //     క్రెవింగ్ క్రెవింగ్.. క్రెవింగ్ ఫర్ యు<br />
  //     నా పిల్లో పక్కన నొవెల్ నువ్వు<br />
  //     ట్రిప్పింగ్ ట్రిప్పింగ్.. ట్రిప్పింగ్ </p>

            
  //     ]
    
  //     const quoteIndex= Math.floor(Math.random() * teluguQuotes.length);
  //     console.log(quoteIndex)
  //      const randomQuote=teluguQuotes[quoteIndex]
  //      console.log(randomQuote)
  //      this.setState({quote:randomQuote})



  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.state.quote}</h1>
  //         <button onClick={this.handleRandomQuote}>RandomQuote</button>
  //       </div>
  //     )
  //   }
  // }
  // import React, { Component } from 'react'
  // export default class App extends Component {
  //   constructor(){
  //     super()
  //     this.state={
  //     quote:"consistent is key to success",
  //     color:"blue"
  //     }
      
  //   }
    
  //   myRandomQuote=()=>{
  //    const teluguQuote=[
  //     "ప్రయత్నం లేకుండా విజయము అసాధ్యం!",
  //     "నీ కలలు నీలోనే ప్రారంభమవాలి.",
  //     "ఓడిపోవడం కాదు, నిలబడే ధైర్యం ముఖ్యం!",
  //     "నువ్వు నువ్వే సృష్టించే విజయాన్ని మరెవ్వరూ తగిలించలేరు.",
  //     "ప్రతి ప్రయత్నం ఒక విజయం!",
  //     "సమయం తక్కువగా ఉంటే, ప్రయత్నం ఎక్కువగా చేయాలి.",
  //     "నిన్నటి తప్పులే నేటి విజయం.",
  //     "మీరు శక్తి కనబరిచినప్పుడు ప్రపంచం కూడ మీను ఆదరిస్తుంది.",
  //     "జీవితాన్ని మార్చాలంటే, ఒక చిన్న అడుగు పెట్టాలి.",
  //     "విజయానికి దారి ఒకే – నిరంతర పోరాటం.",
  //     "నువ్వు సృష్టించు విజయమే నిన్ను ఆదరిస్తుంది.",
  //     "కష్టాలే పాఠాలు, విజయం అలవాటుగా వస్తుంది.",
  //     "ప్రయత్నం తప్పనిసరిగా ఉంటే, విజయాన్ని తప్పించలేము.",
  //     "ఏడుపు అలవాటు చేయు, కానీ నిలబడటం నేర్చుకో.",
  //     "నీవు లేని చోట, నీ ప్రయత్నాలు ఉంటాయి.",
  //     "విజయం బహుమతి కాదు, అది కృషికి ఫలితం.",
  //     "కాలాన్ని వృథా చేయకు – అది తిరిగి రావడం లేదు.",
  //     "నిన్ను నీవు నమ్ము, ప్రపంచం నిన్ను మరిచినా సరే.",
  //     "శ్రమిస్తే శిఖరాలు దక్కుతాయి.",
  //     "పెద్ద కలలు కని, వాటిని నిజం చేయి.",
  //     "గెలుపు మీ గమ్యం కాదు, అది మీ అలవాటు కావాలి.",
  //     "ఒకే దారిలో వెళ్ళిపోకు, నీ దారిని నీవే సృష్టించు.",
  //     "ఆలోచించు, ఆచరించు, సాధించు.",
  //     "ఎప్పటికైనా ప్రారంభించు, ఆలస్యం అయినా సరే.",
  //     "నీ స్వప్నాలకు నీ కాళ్లు పెట్టు.",
  //     "తప్పులు పాఠాలు అవుతాయి, వాటిని భయపడవద్దు.",
  //     "విజయం శబ్దం కాదు, అది శ్రమల యొక్క నిశ్శబ్ద ప్రతిఫలం.",
  //     "ఒక గొప్ప వ్యక్తి అనగానే, అతను ఎన్నో ఓటములు ఎదుర్కొన్నవాడు.",
  //     "తన మీద నమ్మకమున్నవాడే ఎప్పటికైనా ముందుకు వెళ్తాడు.",
  //     "జీవితంలో ప్రతి అడుగు గమ్యాన్ని దగ్గర చేస్తుంది.",
  //     "నీ పరిస్తితిని శాపించకు – మార్పును మొదలుపెట్టు.",
  //     "నీవు చేసిన కృషి ఎప్పటికైనా ఫలిస్తుంది.",
  //     "ఓడిన తర్వాతే గెలుపు విన్నూతనం తెలుస్తుంది.",
  //     "ప్రపంచాన్ని మార్చాలంటే ముందు నీ ఆలోచనల్ని మార్చు.",
  //     "కష్టం తప్పదు, కాని దాని ఫలం మధురం.",
  //     "గమ్యం చూసే కళ్ళు ఉండాలి, కాదు అనే మనస్సు కాదు.",
  //     "ప్రతిఒక్క రోజు ఓ కొత్త అవకాశం.",
  //     "నీవు రాణించాలంటే, సంతోషంగా కాదు – కృషిగా ఉండాలి.",
  //     "ఒక్కసారి ఓడినప్పుడు ఆగిపోవద్దు, అది మొదటి అడుగే.",
  //     "కలలు చూస్తే చాలు కాదు, వాటి కోసం పనిచేయాలి.",
  //     "ఆలస్యం జీవితం దొరకకుండా చేస్తుంది.",
  //     "నువ్వు చేసే ప్రతి పని నీపై ఒప్పిగానుంది.",
  //     "ఆత్మవిశ్వాసం విజయానికి మూలాధారం.",
  //     "నవ్వుతూ ముందుకు సాగితే బాధలు వెనక్కి తగ్గతాయి.",
  //     "మాటల కంటే పనిచేయడమే గొప్పది.",
  //     "మీరు ప్రారంభించకపోతే, గమ్యం చేరకపోవచ్చు.",
  //     "విజయం కోసం shortcuts వద్దు – కేవలం true effort చాలు.",
  //     "నీ విజయం మీద నువ్వే గర్వపడగలిగితే అదే నిజమైన గెలుపు.",
  //     "పదేళ్లలో నీకోసం చేసినవి గుర్తు రావు, కానీ నీవు చేసినవి గుర్తుంటాయి.",
  //     "కష్టపడితే దేవుడే నీకు మార్గం చూపిస్తాడు.",
  //    ]
  //    const quoteIndex = Math.floor(Math.random() * teluguQuote.length)
  //     const RandomQuote=teluguQuote[quoteIndex]
  //     console.log(RandomQuote)

  //     this.setState({quote:RandomQuote})

  //     let chars="abcdef123456789"
  //     let randomColor="#"
  //     for(let i=0;i<6;i++){
  //      const randomColorIndexx=Math.floor(Math.random() * chars.length)
  //     randomColor+=chars[randomColorIndexx]
  //     }
  //     this.setState({color:randomColor,quote:RandomQuote})
      


  //   }
  //   render() {
  //     return (
  //       <div style={{backgroundColor:this.state.color}}>
  //         <h1>{this.state.quote}</h1>
  //         <button onClick={this.myRandomQuote}>randomQuote</button>
  //       </div>
  //     )
  //   }
  // }
  
// #React icons
// import React, { Component } from 'react'
// import { CiSun } from "react-icons/ci";
// import { FaMoon } from "react-icons/fa";
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       a:false
//     }

//   }
//   themeToggleHandler=()=>{
//     this.setState({a:this.state})
//   }
//   render() {
//     return (
//       <div style={{backgroundColor:this.state.a? "blue":"orange"}}>
//         <button onClick={this.themeToggleHandler}>{this.state.a?<CiSun/>:<FaMoon/>}</button> 
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import Signup from "./Signup"
// import Navbar from "./Navbar"
// import Login from "./Login"
// export default class App extends Component {
//   // constructor(){
//   //         super()
//   //       this.state={
//   //           isSignup:false
//   //       }
//   //   }
//     // myClickSignup=()=>{
//     //     this.setState({isSignup:!this.state.isSignup})
//     // }
//   render() {
//     return (
//       <div>
//         <Login/>
//        <Signup/>
//         <Navbar/>
//       </div>
//     )
//   }
// }
  import React, { Component } from 'react'
import Signup from './Signup'
import Login from './Login'
  
  export default class App extends Component {
    constructor(){
      super()
      this.state={
        isLogin:true
      }
    }
    updateData=()=>{
      this.setState({isLogin:!this.state.isLogin})  
    }
    render() {
      return (
        <div>
           <div>
            <form action="">
            <input type="email" placeholder="email" />
            <input type="Password"placeholder="Password"/>
            <button>Login</button>
            </form>
            </div>

             <br />
           <br/>
              <div>
              <form action="">
           <input type="name" placeholder="name"/>
           <input type="email" placeholder="email"/> 
            <input type="Password"placeholder="Password"/>
               <button>Signup</button>
             </form>
             </div>
      
          <p>{this.state.isLogin ? <Signup/> : <Login/>}</p>
            <button onClick={this.updateData}>{this.state.isLogin?"switch to Signup":"switch to login"}</button>
         </div>
        
      )
    }
  }
  