import {useForm} from './useForm'
import React from 'react'
import params from './formParams.js'

const animaux = ['bear','tiger','snake','donkey']

const TorchboxForm = () => {
  const { handleSubmit, handleChange, data, errors } = useForm(params)
 
  return (
      <form method="post" action="" onSubmit={handleSubmit}>
        <h1>Fill out this form</h1>
        <fieldset>
          <h2>Your details</h2>

          {errors.email && <p className='error'>{errors.email}</p>}
          <p className={errors.email ? 'error' : ''}>
            <label className="label" htmlFor="email">Email</label>
            <input 
              autoFocus 
              
              type="text" 
              id="email" 
              name="email"
              onChange={handleChange('email')}
            />
          </p>
          
          {errors.password && <p className='error'>{errors.password}</p>}
          <p className={errors.password ? 'error' : ''}>
            <label className="label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="username"
              onChange={handleChange('password')}
            />
          </p>
        </fieldset>

        <fieldset>
          <h2>Your animal</h2>
          
          {errors.colour && <p className='error'>{errors.colour}</p>}
          <p className={errors.colour ? 'error' : ''}>
            <label className="label" htmlFor="colour">Colour</label>
            <select name="colour" id="colour"  onChange={handleChange('colour')}>
              <option value="">Choose colour</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
            </select>
          </p>

          {errors.animals && <p className='error'>{errors.animals}</p>}
          <p className={errors.animals ? 'error' : ''}>
            <span className="label">Animal</span>

            {animaux.map(animal=><React.Fragment key={animal}>
              <input 
                type="checkbox" 
                name="animal" 
                value={animal} 
                id={animal}
                onChange={handleChange('animals')}
              />
              <label htmlFor={animal}>{animal.toUpperCase()}</label>
            </React.Fragment>)}
          </p>
          
          {errors.tigerType && <p className='error'>{errors.tigerType}</p>}

          <p className={errors.tigerType ? 'error' : ''}>
            <label className="label" htmlFor="tiger_type">
              Type of tiger
            </label>
            <input 
              type="text" 
              disabled={!data.animals?.tiger}
              name="tiger_type" 
              id="tiger_type"
              onChange={handleChange('tigerType')}
            />
          </p>
        </fieldset>
        <fieldset>
          <p>
            <input 
              type="submit" 
              value="Create account"
              
            />
          </p>
        </fieldset>
        <p>data
          {JSON.stringify(data)}
        </p>errors
        {JSON.stringify(errors)}

      </form>
  );
}

export default TorchboxForm;
