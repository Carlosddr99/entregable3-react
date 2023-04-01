
import { Prop, getColors,removeColorFromArray, createUser} from '../componente/componente'
import {screen, render, fireEvent} from    "@testing-library/react"
import ReactTestUtils from 'react-dom/test-utils'; 


describe("Comprobar test componente props", () =>{

    const changeSize = jest.fn();

    
    it("Comprobar que hay 4 items", ()=>{
        render(<Prop value ={1} onChange={changeSize}  items={[1,2,3,4]}/>);
        expect(screen.getAllByRole('option').length).toBe(4);
    })

    it("Comprobar llamar onChange", ()=>{
        render(<Prop value ={1} onChange={changeSize}  items={[1,2,3,4]}/>);
        const combo = screen.getByRole('combobox');
        fireEvent.change(combo);
        expect(changeSize).toHaveBeenCalled();
    })
})

describe("Colors test", () =>{
    
    it("Comprobamos existe blue en color",() =>{
        expect(getColors().indexOf('blue')).toBeGreaterThan(-1);
    })

    it("Comprobamos que no existe el color orange",() =>{
        expect(getColors().includes('orange')).toBeFalsy();
    })

    it("Comprobamos correcta eliminacion", () =>{
        const result = removeColorFromArray(getColors(), 'blue');
        expect(result).toStrictEqual(["yellow", "red"]);

    })
})

describe("Crear usuario", ()=>{
    const usuario = createUser("Carlos", 12);
    
    it("Comporbamos creacion" ,()=>{
        expect(usuario).toStrictEqual({name:'Carlos', age:12});
    })
})