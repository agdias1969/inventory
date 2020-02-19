import React, { Component } from 'react'

class AssetForm extends Component {
    render() {
        return (
            <div className='create-asset-form'>
               <div className='create-asset-details'>
                 <input type='text' name='application' placeholder='Aplicação'/>
                 <input type='text' name='description' placeholder='Descrição'/>
                 <input type='text' name='type' placeholder='Tipo (ex.: FrontEnd, Backend, Microservico)'/ >
                 <input type='text' name='technology' placeholder='Tecnologia (ex. Java, PHP)'/ >
                 <button>Add Application</button>

              
               </div>
            </div>
        )
    }
}

export default AssetForm;