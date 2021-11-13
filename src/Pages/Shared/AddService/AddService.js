import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';


const AddService = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit =  data => {
        console.log(data);
        axios.post('http://localhost:5000/explores',data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
                return('/explores')
            }
            
        })
    }
    return (
        <div className='added-service'>
            <h2>Added Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register('name', {require: true, maxlength:20})} placeholder='enter bike name' />

                <input type='text' {...register('cc')} placeholder='enter bike cc number' />

                <input type="number" {...register('price')} placeholder='enter price' />

                <textarea {...register("details")} placeholder='enter bike details'/>

                <input {...register('imgs')} placeholder=' enter bike image url' />

                <input className='submit-button' type="submit" />
            </form>
        </div>
    );
};

export default AddService;