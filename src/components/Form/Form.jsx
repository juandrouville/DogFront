import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { postDog } from '../../redux/actions/dogs';
import { getTemperaments } from '../../redux/actions/temperaments';
import { useEffect } from 'react';
import './form_style.css';


function Form(){

    var created = false;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments())
    },[]);

    const state = useSelector((state) => state.temperaments);
    

    const [ dog,setDog ] = useState({
        name:'',
        weight_min:'',
        weight_max:'',
        height:'',
        life:'',
        
    });

    const [errors,setErrors] = useState({});

    function validate(input){
        let errors = {};
        if(!input.name) {
            errors.name = 'Name is required';
        } else if (! /^[a-zA-Z]+$/.test(input.name)){
            errors.name = 'Name is invalid ';
        };
        if(!input.weight_min){
            errors.weight_min = 'Weight Min is Required';
        } else if (! /^[0-9]+$/.test(input.weight_min)){
            errors.weight_min = 'Weight Min is Invalid';
        };
        if(!input.weight_max){
            errors.weight_max = 'Weight Max is Required';
        } else if (! /^[0-9]+$/.test(input.weight_max)){
            errors.weight_max = 'Weight Max is Invalid';
        };
        if(!input.life){
            errors.life = 'Years Life is Required';
        } else if (!/[0-9]+\s\w+/.test(input.life)){
            errors.life = 'Years Life is Invalid'
        }
        if(!input.height){
            errors.height = 'Height is Required';
        } else if (!/[0-9]+...[0-9]+/.test(input.height)){
            errors.height = 'Height is Invalid'
        }
        return errors;
    }

    function handleChange(event){
        setErrors(validate({
            ...dog,
            [event.target.name] : event.target.value,
        }));

        setDog({
            ...dog,
            [event.target.name] : event.target.value
        });
    };

    var selectTemperaments=[];

    function setTemperament(event){
        if(event.target.checked === true){
            selectTemperaments.push(
                Number(event.target.id)
            );
        };
    };

    function createDog(event){
        event.preventDefault();
        dispatch(postDog({
            ...dog,
            temperaments:[...selectTemperaments],
        }));
        created = true;
        
    };
        
        

    function disabled(){
        if(Object.entries(errors).length === 0){return false};
        if(Object.entries(errors).length !== 0){return true};
    };
    
                


    return(
        <div>
            <NavBar/>
            <div className="container-form">
                <form onSubmit={createDog}>
                <div className="container-input">
                    <input
                        required
                        placeholder="Name"
                        type="text"
                        autoComplete="off"
                        name="name"
                        onChange={handleChange}
                    ></input>
                    { errors.name &&
                        <label htmlFor="name">{errors.name}</label>
                    }
                    <input
                        required
                        autoComplete="off"
                        placeholder="Years life"
                        type="text"
                        name="life"
                        onChange={handleChange}
                    ></input>
                    { errors.life &&
                        <label htmlFor="life">{errors.life}</label>
                    }
                    <input
                        required
                        autoComplete="off"
                        placeholder="Weight Min"
                        type="text"
                        name="weight_min"
                        onChange={handleChange}
                    ></input>
                    { errors.weight_min &&
                        <label htmlFor="weight_min">{errors.weight_min}</label>
                    }
                    <input
                        required
                        autoComplete="off"
                        placeholder="Weight Max"
                        type="text"
                        name="weight_max"
                        onChange={handleChange}
                    ></input>
                    { errors.weight_max &&
                        <label htmlFor="weight_max">{errors.weight_max}</label>
                    }
                    <input
                        required
                        autoComplete="off"
                        placeholder="Height"
                        type="text"
                        name="height"
                        onChange={handleChange}
                    ></input>
                    { errors.height &&
                        <label htmlFor="height">{errors.height}</label>
                    }
                    </div>
                    <div className="checkbox" >
                        <div>
                            <h1>Select Temperaments</h1>
                        </div>
                        <div className="container-items">
                        {state.loading == true && <Loading/>}
                        {state.error.length !== 0 && <Error/>} 
                        {state.temperaments.length !== 0 && state.temperaments.map(temp => 
                            <div className="check-items">
                                <label htmlFor={temp.id}>{temp.name}</label>
                                <input type="checkbox" id={temp.id} value={temp.id} className="temperaments" onClick={setTemperament}/>
                            </div>
                        )}
                        </div>
                    </div>
                    <button type="submit" disabled={disabled()}>Create</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
