


export const Prop = (props)=>
{return(
<select value={props.value} onChange={props.onChange}>
{props.items.map(val => (
<option key= {val} value={val}>{val}</option>
))}
</select>)}

export const getColors = () => {
    return ['yellow', 'red', 'blue']
    }

export const removeColorFromArray = (array, color) => {
        return array.filter(element => element !== color)
    }

export const createUser = (name, age) => ({ name, age })
