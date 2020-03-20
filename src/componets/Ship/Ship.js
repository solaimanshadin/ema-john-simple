import React from 'react';
import { useForm } from 'react-hook-form'
import './Ship.css'
import { useAuth } from '../Login/useAuth';
const Ship = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    const auth = useAuth();
    return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={auth.user.name} ref={register} placeholder="Name" />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email" />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}

        <input name="address" ref={register({ required: true })} placeholder="Address" />
        {/* errors will return when field validation fails  */}
        {errors.address && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    )
};

export default Ship;