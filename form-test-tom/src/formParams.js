const params = {
  validations: {
    email: {
      required: {
        value: true,
        message: 'Not going far without an email, are we.'
      },
      custom: {
        isValid: (data) => data.email?.includes('@'),
        message: 'Email addresses contain an "@" symbol'
      }
    },
    password: {
      required: {
        value: true,
        message: 'You must choose a password',
      },
      custom: {
        isValid: (data) => data.password?.length > 7,
        message: 'Choose a password 8 characters or longer',
      },
    },
    
    colour: {
      required: {
        value: true,
        message: 'Your animal must have a colour'
      }
    },
    
    animals: {
      custom: {
        isValid: (data) => Object.values(data.animals || {}).filter(i=>i === true).length >1,
        message: 'Choose two or more animals'
      }
    },
    
    tigerType: {
      custom: {
        isValid: (data) => {
          const tigerChosen = data.animals.tiger === true
          const tigerTypeEntered = data.tigerType
          if (!tigerChosen) return true
          if (tigerChosen && !tigerTypeEntered) return false
          if (tigerChosen && tigerTypeEntered.length) return true
        },
        message: 'If you choose a tiger, you have to add some more detail'
      },
      
    }
  },
  onSubmit: () => alert('Great success! Submitted')
}

export default params