import React, { Component } from 'react';
import './MenuItems.css';



class RenderCommand extends Component {
    constructor(props) {
        super(props);
        // this.addProduct = this.addProduct.bind(this);
        this.state = {

    //         menuList: [
    //             { name: 'Café', price: 15 },
    //             { name: 'Té', price: 10 },
    //             { name: 'Milkshake', price: 25 }
    //         ]
    //     }
    // }

    // addProduct() {
    //     console.log("Hola Glo :D");
    //     console.log(this.menuId)
    //     console.log(this.menuId.button);
    // }

    // render() {
    //     let { menuList } = this.state
    //     return (
    //         <div className="menuItems">
    //             <p>Aqui se imprimen los elementos del menu</p>
    //             <ul>
    //                 {menuList.map(element => (
                //             <div key={element.name} id={element.name} ref={button => { this.menuId = button; }}>
                //                 <p>{element.name}</p>
                //                 <button value={element.name} onClick={this.addProduct}>{element.name}</button>
                //             </div>
                //         ))  
                //     }
                // </ul>
                // </div>
//                 )
//                   }

// } 

            menu: []
        }
    }

    holi() {console.log(this.state.menu)} 


    componentDidMount(){ 
       // const local = 'http://172.17.32.228:3000/products';
        const deploy = 'https://gdl003-burger-queen-back-end.engkarinacabrera.now.sh/products';
        fetch( deploy)
                .then(data => data.json())
                .then(data => {
                    let arr= [];
                    let keac= () =>{
                        data.products.forEach((element) => {
                           arr.push(element)                        
                      }); console.log(arr)                   
                        return arr;
                      }
                      keac()

                    this.setState({
                        menu: arr 
                          })
                      })
                    }  
                    
                     
         


    render() {
        const command = this.state;

        return (
            <div className="menuItems">
              <p>Aquí van los botones de lo que hay en mi menú</p>
              {command.menu.map((command, key)=>(
                <button key={key} id={command.id} className= 'button' onClick = {(id)=>{}}>{command.name}</button> 
              ))
              } 
            </div>
           
        )
}
}
export default RenderCommand;