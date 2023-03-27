
import Prop from 'componenente/componenete.js'
import {render, screen} from    "@testing-library/react"
import userEvent from '@testing-library/user-event'


describe("Comprobar test componente props", () =>{

    
    it("Comprobar prop onChange", ()=>{
        const funcion = ()=>console.log("Se ha cambiado");
        render(<Prop value ={1} onChange={funcion}  items={[1,2,3,4]}/>)
        userEvent.selectOptions(screen.getAllByRole('select').at(0))
        expect(funcion).toHaveBeenCalled();
    })
})

describe("Colors test", () =>{
    const getColors = () => {
        return ['yellow', 'red', 'blue']
        }
    
    const removeColorFromArray = (array, color) => {
            return array.filter(element => element !== color)
        }
    const result = removeColorFromArray(getColors(), 'blue')

    it("Comprobamos existe blue en color",() =>{
        expect(getColors().indexOf('blue')).toBeGreaterThan(-1);
    })

    it("Comprobamos correcta eliminacion", () =>{
        expect(result).toStrictEqual(["yellow", "red"]);

    })
})

describe("Crear usuario", ()=>{
    const createUser = (name, age) => ({ name, age })

    it("Comporbamos creacion" ,()=>{
        expect(createUser("Carlos", 12)).toStrictEqual({name:'Carlos', age:12});
    })
})