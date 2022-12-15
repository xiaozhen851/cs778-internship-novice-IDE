import { useState } from 'react'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { Alert, FormRow } from '../../Component'
import { useAppContext } from '../../Context/appContext'

const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = useAppContext()
  const [name,setName] = useState(user?.name) //这里用？的原因是有可能user是null
  const [email,setEmail] = useState(user?.email)
  const [university, setUniversity] = useState(user?.university)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name || !email||!university){
      displayAlert()
      return //return here because don't want to call update user
    }
    // console.log("update user")
    const currentUser = {email,name,university}
    updateUser(currentUser)

  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='text'
            name='university'
            value={university}
            handleChange={(e) => setUniversity(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
