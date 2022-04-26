const params = {
  validations: {
    email: {
      required: {
        value: true,
        message: 'not going far without an email, are we.'
      },
      custom: {
        isValid: (value) => value?.includes('@'),
        message: 'email addresses contain an "@" symbol'
      }
    },
    password: {
      required: {
        value: true,
        message: 'You must choose a password',
      },
      custom: {
        isValid: (value) => value?.length > 7,
        message: 'Choose a password 8 characters or longer',
      },
    },
    
    colour: {
      required: {
        value: true,
        message: 'your animal must have a colour'
      }
    },
    
    animals: {
      custom: {
        isValid: (animals) => Object.values(animals || {}).filter(i=>i === true).length >1,
        message: 'choose two or more animals'
      }
    },
    
    tigerType: {
      custom: {
        isValid: (type) => {
          console.log(type)
          if (type === 'tiger') console.log("tiger chosen")
          // if (data.animals.tiger === undefined) return true
          if (type === undefined || !type.length) return false
        },
        message: 'if you choose a tiger, you have to be more specific'
      },
      
    }
  },
  onSubmit: () => alert('Great success! Submitted')
}

export default params